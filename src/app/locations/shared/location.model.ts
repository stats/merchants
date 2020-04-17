export interface Location {
  name: string;
  descritpion: string;
  key: string;
  parentLocationKey: string;
  unlocked: boolean;
  sellsItemKeys: string[];
  buysItemKeys: string[];
  sellsMarkup: number;
  buysMarkup: number;
}
