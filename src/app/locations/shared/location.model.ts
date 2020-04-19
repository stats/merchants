export interface Location {
  name: string;
  description: string;
  key: string;
  imageKey: string;
  parentLocationKey: string;
  unlocked: boolean;
  sellsItemKeys: string[];
  buysItemKeys: string[];
  sellsMarkup: number;
  buysMarkup: number;
}
