import { Injectable } from '@angular/core';

import { Item } from './shared/item.model';
import { ITEMS } from './shared/item.data';

@Injectable()
export class ItemService {

  constructor() { }

  getItems(): Item[] {
    return ITEMS;
  }

  getItem(key: string): Item {
    return ITEMS.find(item => item.key === key)[0];
  }
}
