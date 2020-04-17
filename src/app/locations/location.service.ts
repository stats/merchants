import { Injectable } from '@angular/core';

import { Location } from './shared/location.model';
import { LOCATIONS } from './shared/location.data';

@Injectable()
export class LocationService {

  constructor() { }

  getLocations(): Location[] {
    return LOCATIONS;
  }

  getRootLocations(): Location[] {
    return LOCATIONS.find(location => location.parentLocationKey == null && location.unlocked);
  }

  getLocation(key: string): Quest {
    return LOCATIONS.find(location => location.key === key)[0];
  }

}
