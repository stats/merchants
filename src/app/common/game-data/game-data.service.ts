import { Injectable } from '@angular/core';

import GameData from '../../../data/GameData.json';

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

  getUnlockedLocations() {
    return this._locations.filter(l => l.unlocked == true);
  }

  getUnlockedCrafts() {
    return this._crafts.filter(c => c.unlocked == true);
  }

  getUnlockedQuests() {
    return this._quests.filter(q => q.unlocked == true);
  }

}
