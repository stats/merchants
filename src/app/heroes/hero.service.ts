import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

import { Hero, IHero } from './shared/hero.model';
import { Location } from '../locations/shared/location.model';
import { Quest } from '../quests/shared/quest.model';
import { Craft } from '../crafts/shared/craft.model';
import { Key, KeyCount } from '../common/key-count.model';
import { Item } from '../items/shared/item.model';

import { GameDataService } from '../common/game-data/game-data.service';

@Injectable()
export class HeroService {

  private heroes:Hero[];
  private currentHeroIndex: number;

  public currentHero$: BehaviorSubject<IHero> ;

  private _gameData:GameDataService;

  constructor() {
    this._gameData = new GameDataService();
    this.heroes = JSON.parse(localStorage.getItem('heroes'));
    if(this.heroes == null) {
      this.heroes = [];
    }
    for(let i = 0; i < this.heroes.length; i++) {
      this.heroes[i] = new Hero(this.heroes[i]);
    }
    if(this.heroes == null) {
      this.heroes = [];
    }

    this.repairHeroData();

    this.currentHeroIndex = parseInt(localStorage.getItem('currentHeroIndex'));
    this.currentHero$ = new BehaviorSubject<IHero>(this.currentHero);
  }

  /** This repair assumes locations and crafts are not deleted **/
  repairHeroData(): void {
    for(let hero of this.heroes) {
      for(let cq of hero.completedQuests) {
        let q: Quest = this._gameData.getQuest(cq.key);
        if(q) {
          for(let ul of q.unlockLocationKeys) {
            if(!hero.hasLocation(ul.key)) {
              console.log("Repairing location", ul.key);
              hero.addLocation(ul.key);
            }
          }
          for(let uc of q.unlockCraftKeys) {
            if(!hero.hasCraft(uc.key)) {
              console.log("Repairing craft", uc.key);
              hero.addCraft(uc.key);
            }
          }
          for(let uq of q.unlockQuestKeys) {
            if(!hero.hasQuest(uq.key) && !hero.hasCompletedQuest(uq.key)) {
              console.log("Repairing quest", uq.key);
              hero.addQuest(uq.key);
            }
          }
        } else {
          //do nothing, quest has been removed.
        }
      }
    }
    this.saveHeroes();
  }

  createHero(name: string) {
    let hero: Hero = new Hero({
      name: name,
      gold: 50,
      completedQuests: [],
      locations: this._gameData.getUnlockedLocations(),
      crafts: this._gameData.getUnlockedCrafts(),
      quests: this._gameData.getUnlockedQuests(),
      inventory: []
    });

    this.heroes.push(hero);

    this.currentHeroIndex = this.heroes.length - 1;

    this.currentHero$.next(hero);

    this.saveHeroes();
  }

  removeHero(name: string) {
    this.heroes = this.heroes.filter(hero => hero.name !== name);
    if(this.currentHero.name == name) {
      this.currentHeroIndex = null;
      this.currentHero$.next(null);
    }
    this.saveHeroes();
  }

  saveHeroes() {
    localStorage.setItem('heroes', JSON.stringify(this.heroes));
  }

  get currentHero(): Hero {
    return this.heroes[this.currentHeroIndex];
  }

  setCurrentHero(name: string) {
    for(var i = 0; i < this.heroes.length; i++) {
      if(this.heroes[i].name === name) {
        this.currentHeroIndex = i;
        this.currentHero$.next(this.heroes[i]);
        localStorage.setItem('currentHeroIndex', "" + this.currentHeroIndex);
      }
    }
  }

  commitCurrentHeroChanges() {
    this.currentHero$.next(this.currentHero);
  }

  getHeroes(): Hero[] {
    return this.heroes;
  }

  getAvailableRootLocations(): Location[] {
    let locations: Location[] = this._gameData.getRootLocations();
    return locations.filter(l => this.currentHero.hasLocation(l.key));
  }

  getAvailableLocationsByParent(key: string): Location[] {
    let locations: Location[] = this._gameData.getLocationsByParent(key);
    return locations.filter(l => this.currentHero.hasLocation(l.key));
  }

  getLocation(key: string): Location {
    return this._gameData.getLocation(key);
  }

  getAvailableQuestsByLocation(key: string): Quest[] {
    let quests: Quest[] = this._gameData.getQuestsByParent(key);
    return quests.filter(q => this.currentHero.hasQuest(q.key));
  }

  getSellsItemsByLocation(key: string): Item[] {
    let itemKeys: Key[] = this._gameData.getLocation(key).sellsItemKeys;
    let itemStrings: string[] = itemKeys.map(key => key.key );
    return this._gameData.getItems().filter(item => itemStrings.indexOf(item.key) !== -1);
  }

  getBuysItemsByLocation(key: string): Item[] {
    let itemKeys: Key[] = this._gameData.getLocation(key).buysItemKeys;
    let itemStrings: string[] = itemKeys.map(key => key.key );
    return this._gameData.getItems().filter(item => itemStrings.indexOf(item.key) !== -1);
  }

  undertakeQuest(key: string): boolean {
    if(!this.canUndertakeQuest(key)) return false;
    let q = this._gameData.getQuest(key);

    this.currentHero.gold -= q.requiredGold;
    this.currentHero.gold += q.rewardedGold;
    /**
     * Remove item
     */
    for(let item of q.consumedItems) {
      this.currentHero.removeItem(item);
    }

    /**
     * Add item
     **/
    this.currentHero.completeQuest(key);

    for(let item of q.rewardedItems) {
      this.currentHero.addItem(item);
    }

    for(let loc of q.unlockLocationKeys) {
      this.currentHero.addLocation(loc.key);
    }

    for(let que of q.unlockQuestKeys) {
      this.currentHero.addQuest(que.key);
    }

    for(let c of q.unlockCraftKeys) {
      this.currentHero.addCraft(c.key);
    }

    /**
     * Remove this quest if not repeatable
     **/
    if(!q.repeatable) {
      this.currentHero.removeQuest(q.key);
    }

    this.commitCurrentHeroChanges();
    this.saveHeroes();

    return true;
  }

  canUndertakeQuest(key: string): boolean {
    let q: Quest = this._gameData.getQuest(key);
    if(!q || !this.currentHero.hasQuest(key)) return false;

    if(this.currentHero.gold < q.requiredGold) return false;

    let kc: KeyCount[] = this.combineKeyCounts(q.requiredItems, q.consumedItems);
    for(var i = 0; i < kc.length; i++) {
      if( !this.currentHero.hasItemCount(kc[i]) ) return false;
    }

    return true;
  }

  combineKeyCounts(items1: KeyCount[], items2: KeyCount[]): KeyCount[] {
    let results: KeyCount[] = [];
    for(let item of items1) {
      let iq: KeyCount = { key: item.key, count: item.count };
      results.push(iq);
    }

    for(let item of items2) {
      let iq: KeyCount = results.find(i => i.key === item.key);
      if(iq) {
        iq.count += item.count;
      } else {
        iq = {key: item.key, count: item.count }
        results.push(iq);
      }
    }
    return results;
  }

  costWithMarkup(cost: number, markup: number): number {
    return Math.max(1, Math.round(cost * markup));
  }

  canBuyItem(cost: number) {
    return this.currentHero.gold >= cost;
  }

  buyItem(item: Item, markup: number) {
    let cost: number = this.costWithMarkup(item.cost, markup)
    if(this.canBuyItem(cost)) {
      this.currentHero.addItem({key: item.key, count: 1});
      this.currentHero.gold -= cost;
    }
    this.commitCurrentHeroChanges();
    this.saveHeroes();
  }

  canSellItem(kc: KeyCount) {
    return this.currentHero.hasItemCount(kc);
  }

  sellItem(item: Item, markup: number) {
    if(this.canSellItem({key:item.key, count: 1})) {
      this.currentHero.removeItem({key: item.key, count: 1});
      this.currentHero.gold += this.costWithMarkup(item.cost, markup);
    }
  }

  getItem(key: string): Item {
    return this._gameData.getItem(key);
  }

  getInventory(): KeyCount[] {
    return this.currentHero.getInventory();
  }

}
