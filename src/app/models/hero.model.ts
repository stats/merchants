import { merge } from 'lodash';

import { IItem } from '@models/item.model';
import { Items, Locations } from '../data/game-data';

export interface IHero {
  name: string;

  locations:string[];
  items:string[];
}

export class Hero implements IHero {
  name: string;

  locations:string[];
  items:string[]

  constructor(opts?: IHero) {
    merge(this, opts)
  }

  hasLocation(key: string): boolean {
    return this.locations.indexOf(key) !== -1;
  }

  addLocations(keys: string[]): void {
    for(let key of keys) {
      this.addLocation(key);
    }
  }

  addLocation(key: string): void {
    if(this.hasLocation(key)) return;
    this.locations.push(key);
  }

  removeLocations(keys: string[]): void {
    for(let key of keys) {
      this.removeLocation(key);
    }
  }

  removeLocation(key: string): void {
    this.locations = this.locations.filter(k => k !== key);
  }

  getLocations(): any {
    let locations: any = {};
    for(let loc of this.locations) {
      locations[loc] = Locations[loc];
    }
    return locations;
  }

  hasItem(key: string): boolean {
    return this.items.indexOf(key) !== -1;
  }

  addItems(keys: string[]): void {
    for(let key of keys) {
      this.addItem(key);
    }
  }

  addItem(key: string): void {
    if(this.hasItem(key)) return;
    this.items.push(key);
  }

  getItems(): any {
    let items: any = {};
    for(let item of this.items) {
      items[item] = Items[item];
    }
    return items;
  }

}
