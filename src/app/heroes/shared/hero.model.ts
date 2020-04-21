import { Location } from '../../locations/shared/location.model';
import { Craft } from '../../crafts/shared/craft.model';
import { Quest } from '../../quests/shared/quest.model';
import { KeyCount } from '../../common/key-count.model';

export interface Hero {
  name: string;
  gold: number;

  questsCompleted: KeyCount[];

  locations:Location[];
  crafts:Craft[];
  quests:Quest[];

  inventory:KeyCount[];
}
