import { Key } from '../../common/key-count.model';

export interface Location {
  name: string;
  description: string;
  key: string;
  imageKey: string;
  parentLocationKey: string;
  unlocked: boolean;
  sellsItemKeys: Key[];
  buysItemKeys: Key[];
  sellsMarkup: number;
  buysMarkup: number;
}
