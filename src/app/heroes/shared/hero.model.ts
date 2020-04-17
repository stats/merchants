import { Location } from '../../locations/shared/location.model';
import { Craft } from '../../crafts/shared/craft.model';
import { Quest } from '../../quests/shared/quest.model';
import { ItemQuantity } from '../../items/shared/item-quantity.model';

export interface Hero {
  name: string;
  gold: number;

  locations:Location[];
  crafts:Craft[];
  quests:Quest[];

  inventory:ItemQuantity[];
}
