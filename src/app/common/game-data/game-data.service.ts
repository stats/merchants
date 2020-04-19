import { Injectable } from '@angular/core';

import GameData from '../../../data/GameData.json';

import { Location } from '../../locations/shared/location.model';
import { Craft } from '../../crafts/shared/craft.model';
import { Quest } from '../../quests/shared/quest.model';
import { Item } from '../../items/shared/item.model';

@Injectable()
export class GameDataService {

  private _data: any;

  private _locations: any;
  private _crafts: any;
  private _items: any;
  private _quests: any;

  constructor() {
    this._data = GameData;
    this._locations = this._data['sheets'].find(l => l.name === "Locations")['lines'];
    this._crafts = this._data['sheets'].find(c => c.name === "Crafts")['lines'];
    this._items = this._data['sheets'].find(i => i.name === "Items")['lines'];
    this._quests = this._data['sheets'].find(q => q.name === "Quests")['lines'];
  }

  getData(): any {
    return this._data;
  }

  getUnlockedLocations(): Location[] {
    return this._locations.filter(l => l.unlocked == true);
  }

  getUnlockedCrafts(): Craft[] {
    return this._crafts.filter(c => c.unlocked == true);
  }

  getUnlockedQuests(): Quest[] {
    return this._quests.filter(q => q.unlocked == true);
  }

  getItems(): Item[] {
    return this._items;
  }

  getItem(key: string): Item {
    return this._items.find(item => item.key === key);
  }

  getQuests(): Quest[] {
    return this._quests;
  }

  getQuest(key:string): Quest {
    return this._quests.find(quest => quest.key === key);
  }

  getCrafts(): Craft[] {
    return this._crafts;
  }

  getCraft(key: string): Craft {
    return this._crafts.find(craft => craft.key === key);
  }

  getLocations(): Location[] {
    return this._locations;
  }

  getLocation(key: string): Location {
    return this._locations.find(location => location.key === key);
  }

}
