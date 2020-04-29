import { KeyCount } from "@common/key-count.model";

export interface Item {
  name: string;
  description: string;
  key: string;
  imageKey: string;
  cost: number;
  craftable: boolean;
  craftGoldCost: number;
  craftRequiredItems: KeyCount[];
  craftConsumedItems: KeyCount[];
  craftedCount: number;
}
