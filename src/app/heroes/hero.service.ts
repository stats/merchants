import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

import { Hero, IHero } from '@models/hero.model';
import { ILocation } from '@models/location.model';
import { IItem } from '@models/item.model';

import { Locations, Recipes, Items } from '../data/game-data';

@Injectable()
export class HeroService {

  private heroes:Hero[];
  private currentHeroIndex: number;
  private currentLocationKey: string;

  public currentHero$: BehaviorSubject<Hero>;
  public currentLocation$: BehaviorSubject<ILocation>;

  constructor() {
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

    this.currentHeroIndex = parseInt(localStorage.getItem('currentHeroIndex'));
    this.currentHero$ = new BehaviorSubject<Hero>(this.currentHero);
    this.currentLocationKey = 'cusp_of_adventure';
    this.currentLocation$ = new BehaviorSubject<ILocation>(this.currentLocation);
  }

  createHero(name: string) {
    let hero: Hero = new Hero({
      name: name,
      locations: ['cusp_of_adventure'],
      items: ['travelers_boots']
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

  getHeroes(): Hero[] {
    return this.heroes;
  }

  get currentLocation(): ILocation {
    return Locations[this.currentLocationKey];
  }

  getCurrentLocationKey(): string {
    return this.currentLocationKey;
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

  setCurrentLocation(key: string) {
    this.currentLocationKey = key;
    this.currentLocation$.next(Locations[key]);
  }

  getLocation(key: string): ILocation {
    return Locations[key];
  }

  getItem(key: string) {
    return Items[key];
  }

  use(items: string[]) {
    for(let action of this.currentLocation.actions) {
      if( this.isEqual(items, action.items)) {
        this.currentHero.addItems(action.rewards);
        this.currentHero.addLocations(action.unlockLocations);
        this.currentHero.removeLocations(action.removeLocations);
        if(action.moveToLocation) this.setCurrentLocation(action.moveToLocation);
        return;
      }
    }
  }

  craft(items: string[]) {
    for(let recipe of Recipes) {
      if( this.isEqual(items, recipe.items) ) {
        this.currentHero.addItems(recipe.rewards);
        return;
      }
    }
  }

  isEqual(array1: string[], array2: string[]): boolean {
    return array1.length === array2.length && array1.sort().every(function(value, index) { return value === array2.sort()[index]});
  }

}
