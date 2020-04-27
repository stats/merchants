import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { HeroService } from '@core/heroes/hero.service';
import { GameDataService } from '@common/game-data/game-data.service';
import { Quest } from '../shared/quest.model';
import { Craft } from "@core/crafts/shared/craft.model";
import { Location } from "@core/locations/shared/location.model";
import { ItemCount } from '@common/key-count.model';

@Component({
  selector: 'app-quest-detail',
  templateUrl: './quest-detail.component.html',
  styleUrls: ['./quest-detail.component.css']
})
export class QuestDetailComponent implements OnInit {

  currentQuest: Quest;

  requiredItems: ItemCount[];
  consumedItems: ItemCount[];
  unlockLocations: Location[];
  unlockCrafts: Craft[];
  unlockQuests: Quest[];

  showQuestCompleted: boolean = false;

  constructor(public heroService: HeroService, public gameDataService: GameDataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.currentQuest = this.gameDataService.getQuest(params.get('key'));
      this.requiredItems = this.gameDataService.keyCountsToItemCount(this.currentQuest.requiredItems);
      this.consumedItems = this.gameDataService.keyCountsToItemCount(this.currentQuest.consumedItems);
      this.unlockLocations = this.gameDataService.keysToLocations(this.currentQuest.unlockLocationKeys);
      this.unlockCrafts = this.gameDataService.keysToCrafts(this.currentQuest.unlockCraftKeys);
      this.unlockQuests = this.gameDataService.keysToQuests(this.currentQuest.unlockQuestKeys);
    });
  }

  canUndertakeQuest(key: string): boolean {
    return this.heroService.canUndertakeQuest(key);
  }

  undertakeQuest(key: string): void {
    this.showQuestCompleted = true;
    this.heroService.undertakeQuest(key);
  }

  closeQuest() {
    this.router.navigate(['/locations', this.currentQuest.parentLocationKey]);
  }

}
