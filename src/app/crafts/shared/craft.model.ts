import { ItemQuantity } from '../../items/shared/item-quantity.model';

export interface Craft {
  name: string;
  description: string;
  key: string;
  imageKey: string;
  unlocked: boolean;
  requiredGold: number;
  requiredItems: ItemQuantity[];
  consumesItems: ItemQuantity[];
  rewardsItems: ItemQuantity[];
}
