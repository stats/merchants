import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

  constructor(public heroService: HeroService, public gameDataService: GameDataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.currentQuest = this.heroService.getQuest(params.get('key'));
      console.log('Quest', this.currentQuest);
    });
  }

  canUndertakeQuest(key: string): boolean {
    return true;
  }

  undertakeQuest(key: string): void {

  }

}
