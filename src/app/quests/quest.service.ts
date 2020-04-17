import { Injectable } from '@angular/core';

import { Quest } from './shared/quest.model';
import { QUESTS } from './shared/quest.data';

@Injectable()
export class QuestService {

  constructor() { }

  getQuests(): Quest[] {
    return QUESTS;
  }

  getQuest(key: string): Quest {
    return QUESTS.find(quest => quest.key === key);
  }

  getQuestsByLocation(key: string): Quest[] {
    return QUESTS.filter(quest => quest.parentLocationKey === key);
  }

  getUnlockedQuestsByLocation(key: string): Quest[] {
    return QUESTS.filter(quest => quest.parentLocationKey === key && quest.unlocked);
  }

}
