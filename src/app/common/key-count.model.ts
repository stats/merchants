import { Item } from '@core/items/shared/item.model';

export interface KeyCount {
  key: string;
  count: number;
}

export interface Key {
  key: string;
}

export interface ItemCount {
  item: Item;
  count: number;
}
