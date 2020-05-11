export interface IRecipe {
  items: string[];
  description?: string;
  rewards?: string[];
  unlockLocations?: string[];
  removeLocations?: string[];
  moveToLocation?: string;
}
