import { Injectable } from '@angular/core';

import { Craft } from './shared/craft.model';
import { CRAFTS } from './shared/craft.data';

@Injectable()
export class CraftService {

  constructor() { }

  getCrafts(): Craft[] {
    return CRAFTS;
  }

  getCraft(key: string): Craft {
    return CRAFTS.find(craft => craft.key === key)[0];
  }
}
