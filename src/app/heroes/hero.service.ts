import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

import { Hero } from './shared/hero.model';
import { Location } from '../locations/shared/location.model';
import { Quest } from '../quests/shared/quest.model';
import { Craft } from '../crafts/shared/craft.model';
import { ItemQuantity } from '../items/shared/item-quantity.model';

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
    return this.currentHero.locations.find(location => location.key === key);
  }

  addLocation(key: string): void {

  }

  removeLocation(key: string): void {

  }

  getQuests(): Quest[] {
    return this.currentHero.quests;
  }

  getQuest(key: string): Quest {
    return this.currentHero.quests.find(quest => quest.key === key);
  }

  addQuest(key: string): void {

  }

  removeQuest(key: string): void {

  }

  getCrafts(): Craft[] {
    return this.currentHero.crafts;
  }

  getCraft(key: string): Craft {
    return this.currentHero.crafts.find(craft => craft.key === key);
  }

  addCraft(key: string): void {

  }

  removeCraft(key: string): void {

  }

  getInventory(): ItemQuantity[] {
    return this.currentHero.inventory;
  }

  getItemQuantity(key: string): ItemQuantity {
    return this.currentHero.inventory.find(itemquantity => itemquantity.key === key);
  }

  addItemQuantity(): void {

  }

  removeItemQuantity(): void {

  }

  hasItemQuantities(items: ItemQuantity[] ): boolean {
    return false;
  }
}
