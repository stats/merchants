import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

import { Hero } from './shared/hero.model';
import { Location } from '../locations/shared/location.model';
import { Quest } from '../quests/shared/quest.model';
import { Craft } from '../crafts/shared/craft.model';
import { KeyCount } from '../common/key-count.model';
import { Item } from '../items/shared/item.model';

import { GameDataService } from '../common/game-data/game-data.service';

@Injectable()
export class HeroService {

  private heroes:Hero[];

  public currentHero$: BehaviorSubject<Hero> ;

  private _gameData:GameDataService;

  constructor() {
    this._gameData = new GameDataService();
    this.heroes = JSON.parse(localStorage.getItem('heroes'));
    console.log(this.heroes);
    if(this.heroes == null) {
      this.heroes = [];
    }
    this.currentHero$ = new BehaviorSubject<Hero>(JSON.parse(localStorage.getItem('currentHero')));
  }

  createHero(name: string) {
    let hero: Hero = {
      name: name,
      gold: 50,
      questsCompleted: [],
      locations: this._gameData.getUnlockedLocations(),
      crafts: this._gameData.getUnlockedCrafts(),
      quests: this._gameData.getUnlockedQuests(),
      inventory: []
    };

    this.heroes.push(hero);
    this.currentHero$.next(hero);

    this.saveHeroes();
  }

  removeHero(name: string) {
    this.heroes = this.heroes.filter(hero => hero.name !== name);
  }

  saveHeroes() {
    localStorage.setItem('heroes', JSON.stringify(this.heroes));
  }

  get currentHero(): Hero {
    return this.currentHero$.value;
  }

  setCurrentHero(name: string) {
    this.currentHero$.next(this.heroes.find(hero => hero.name === name));
    localStorage.setItem('currentHero', JSON.stringify(this.currentHero));
  }

  getHeroes(): Hero[] {
    return this.heroes;
  }

  getGold(): number {
    return this.currentHero.gold;
  }

  getLocations(): Location[] {
    return this.currentHero.locations;
  }

  getLocationsByParent(key: string): Location[] {
    return this.currentHero.locations.filter(location => location.parentLocationKey === key);
  }

  getLocation(key: string): Location {
    console.log('Getting Location', key);
    return this.currentHero.locations.find(location => location.key === key);
  }

  addLocations(keys: string[]): void {
    for(let key of keys) {
      this.addLocation(key);
    }
  }

  addLocation(key: string): void {
    let l: Location = this._gameData.getLocation(key);
    this.currentHero.locations.push(l);
  }

  getQuestsByLocation(key: string): Quest[] {
    return this.currentHero.quests.filter(quest => quest.parentLocationKey === key);
  }

  getSellsItemsByLocation(key: string): Item[] {
    let itemStrings: string[] = this.currentHero.locations.find(location => location.key === key).sellsItemKeys;
    return this._gameData.getItems().filter(item => item.key in itemStrings);
  }

  getBuysItemsByLocation(key: string): Item[] {
    let itemStrings: string[] = this.currentHero.locations.find(location => location.key === key).buysItemKeys;
    return this._gameData.getItems().filter(item => item.key in itemStrings);
  }

  getQuests(): Quest[] {
    return this.currentHero.quests;
  }

  getQuest(key: string): Quest {
    return this.currentHero.quests.find(quest => quest.key === key);
  }

  addQuests(keys: string[] ): void {
    for(let key of keys) {
      this.addQuest(key);
    }
  }

  addQuest(key: string): void {
    let q: Quest = this._gameData.getQuest(key);
    this.currentHero.quests.push(q);
  }

  removeQuest(key: string): void {
    this.currentHero.quests = this.currentHero.quests.filter(quest => quest.key === key);
  }

  completeQuest(key: string): void {
    let kc: KeyCount = this.currentHero.questsCompleted.find(kc => kc.key === key);
    if(kc) {
      kc.count += 1;
    } else {
      kc = { key: key, count: 1 };
      this.currentHero.questsCompleted.push(kc);
    }
  }

  undertakeQuest(key: string): boolean {
    if(!this.canUndertakeQuest(key)) return false;
    let q = this.getQuest(key);
    /**
     * Remove item
     */
    this.currentHero.gold -= q.requiredGold;
    this.removeInventoryItems(q.consumedItems);

    /**
     * Add item
     **/
    this.completeQuest(key);
    this.currentHero.gold += q.rewardedGold;
    this.addInventoryItems(q.rewardedItems);
    this.addLocations(q.unlockLocationKeys);
    this.addQuests(q.unlockQuestKeys);
    this.addCrafts(q.unlockCraftKeys);

    /**
     * Remove this quest if not repeatable
     **/
    if(!q.repeatable) {
      this.removeQuest(q.key);
    }

    return true;


  }

  canUndertakeQuest(key: string): boolean {
    let q: Quest = this.getQuest(key);
    if(!q || !q.unlocked) return false;

    if(this.currentHero.gold < q.requiredGold) return false;
    if(!this.hasItemQuantities(this.combineKeyCounts(q.requiredItems, q.consumedItems))) return false;

    return true;
  }


  getCrafts(): Craft[] {
    return this.currentHero.crafts;
  }

  getCraft(key: string): Craft {
    return this.currentHero.crafts.find(craft => craft.key === key);
  }

  addCrafts(keys: string[]): void {
    for(let key of keys) {
      this.addCraft(key);
    }
  }

  addCraft(key: string): void {
    let c: Craft = this._gameData.getCraft(key);
    this.currentHero.crafts.push(c);
  }

  getInventory(): KeyCount[] {
    return this.currentHero.inventory;
  }

  getKeyCount(key: string): KeyCount {
    return this.currentHero.inventory.find(itemcount => itemcount.key === key);
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

  removeInventoryItems(items: KeyCount[]): void {
    for(let item of items) {
      this.removeInventoryItem(item);
    }
  }

  removeInventoryItem(item: KeyCount): void {
    let iq = this.getKeyCount(item.key);
    iq.count -= item.count;
  }

  addInventoryItems(items: KeyCount[]): void {
    for(let item of items) {
      this.addInventoryItem(item);
    }
  }

  addInventoryItem(item: KeyCount): void {
    let iq: KeyCount = this.getKeyCount(item.key);
    if(iq) {
      iq.count += item.count;
    } else {
      iq = { key: item.key, count: item.count };
      this.currentHero.inventory.push(iq);
    }
  }

  hasItemQuantities(items: KeyCount[] ): boolean {
    for(let iq of items) {
      if(!this.hasKeyCount(iq)) return false;
    }
    return true;
  }

  hasKeyCount(item: KeyCount ): boolean {
    let iq: KeyCount = this.getKeyCount(item.key);
    if(iq && iq.count >= item.count) return true;
    return false;
  }
}
