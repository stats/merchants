import { Key, KeyCount } from '../../common/key-count.model';
import { merge } from 'lodash';

export interface IHero {
  name: string;
  gold: number;

  completedQuests: KeyCount[];

  locations:Key[];
  crafts:Key[];
  quests:Key[];

  inventory:KeyCount[];
}

export class Hero implements IHero {
  name: string;
  gold: number;

  completedQuests: KeyCount[];

  locations:Key[];
  crafts:Key[];
  quests:Key[];

  inventory:KeyCount[];

  constructor(opts?: IHero) {
    merge(this, opts)
  }

  getCompletedQuest(key: string): KeyCount {
    return this.completedQuests.find(q => q.key === key);
  }

  hasCompletedQuest(key: string): boolean {
    return this.completedQuests.find(q => q.key === key) != null;
  }

  completeQuest(key: string): void {
    let cq: KeyCount = this.getCompletedQuest(key);
    if(cq) {
      cq.count += 1;
    } else {
      cq = { key: key, count: 1 };
      this.completedQuests.push(cq);
    }
  }

  hasLocation(key: string): boolean {
    return this.locations.find(k => k.key === key) != null;
  }

  addLocation(key: string): void {
    if(this.hasLocation(key)) return;
    this.locations.push({key: key});
  }

  hasCraft(key: string): boolean{
    return this.crafts.find(k => k.key === key) != null;
  }

  addCraft(key: string): void {
    if(this.hasCraft(key)) return;
    this.locations.push({key: key});
  }

  addQuest(key: string): void {
    if(this.hasQuest(key)) return;
    this.quests.push({key: key});
  }

  removeQuest(key: string): void {
    this.quests = this.quests.filter(q => q.key !== key);
  }

  hasQuest(key: string): boolean {
    return this.quests.find(k => k.key == key) != null;
  }

  hasItemCount(kc: KeyCount) {
    return this.inventory.find(i => i.key === kc.key && i.count >= kc.count) != null;
  }

  getItem(key: string): KeyCount {
    return this.inventory.find(i => i.key === key);
  }

  addItem(item: KeyCount): void {
    let k = this.getItem(item.key);
    if(k) {
      k.count += item.count;
    } else {
      this.inventory.push(item);
    }
  }

  removeItem(item: KeyCount): void {
    let k = this.getItem(item.key);
    if(k) {
      k.count -= item.count;
    }
  }
}
