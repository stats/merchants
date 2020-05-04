export interface IAction {
  items: string[];
  description: string;
  unlockLocations?: string[];
  removeLocations?: string[];
  rewards?: string[];
  moveToLocation?: string;
}
