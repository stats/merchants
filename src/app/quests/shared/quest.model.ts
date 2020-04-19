import { ItemQuantity } from '../../items/shared/item-quantity.model';

export interface Quest {
  name: string;
  description: string;
  complete: string;
  key: string;
  imageKey: string;
  parentLocationKey: string;
  repeatable: boolean;
  unlocked: boolean;
  requiredGold: number;
  requiredItems: ItemQuantity[];
  consumedItems: ItemQuantity[];
  rewardedGold: number,
  rewardedItems: ItemQuantity[];
  unlockQuestKeys: string[];
  unlockLocationKeys: string[];
  unlockCraftKeys: string[];
}
