import { merge } from 'lodash';
import { IItem } from './item.model';
import { Items } from '../data/game-data';

export interface ILocation {
  name: string;
  description: string;
  items?: string[];
}

export class Location implements ILocation {

  name: string;

  description: string;

  items: string[];

  cachedItems: IItem[];

  constructor(opts?: ILocation) {
    merge(this, opts);

    this.cachedItems = [];
    for(let item of this.items) {
      this.cachedItems[item] = Items[item];
      if(this.cachedItems[item] == undefined) {
        console.log(item, 'is undefined');
        this.cachedItems[item] = {
          name: item.replace('_',' '),
          description: ''
        }
      }
    }

  }

  getItems(): IItem[] {
    return this.cachedItems;
  }

}
