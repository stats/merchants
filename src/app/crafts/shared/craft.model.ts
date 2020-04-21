import { KeyCount } from '../../common/key-count.model';

export interface Craft {
  name: string;
  description: string;
  key: string;
  imageKey: string;
  unlocked: boolean;
  requiredGold: number;
  requiredItems: KeyCount[];
  consumesItems: KeyCount[];
  rewardsItems: KeyCount[];
}
