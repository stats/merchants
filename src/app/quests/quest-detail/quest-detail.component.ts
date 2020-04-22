import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { HeroService } from '../../heroes/hero.service';
import { GameDataService } from '../../common/game-data/game-data.service';
import { Quest } from '../shared/quest.model';

@Component({
  selector: 'app-quest-detail',
  templateUrl: './quest-detail.component.html',
  styleUrls: ['./quest-detail.component.css']
})
export class QuestDetailComponent implements OnInit {

  currentQuest: Quest;
  showQuestCompleted: boolean = false;

  constructor(public heroService: HeroService, public gameDataService: GameDataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.currentQuest = this.gameDataService.getQuest(params.get('key'));
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
