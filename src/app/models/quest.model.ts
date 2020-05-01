import { Key, KeyCount } from '../../common/key-count.model';

export interface Quest {
  name: string;
  description: string;
  completeText: string;
  key: string;
  imageKey: string;
  parentLocationKey: string;
  repeatable: boolean;
  unlocked: boolean;
  requiredGold: number;
  requiredItems: KeyCount[];
  consumedItems: KeyCount[];
  rewardedGold: number,
  rewardedItems: KeyCount[];
  unlockQuestKeys: Key[];
  unlockLocationKeys: Key[];
  unlockCraftKeys: Key[];
}
