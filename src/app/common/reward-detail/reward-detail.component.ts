import { Component, Input } from '@angular/core';

import { Quest } from '@core/quests/shared/quest.model';
import { GameDataService } from '@common/game-data/game-data.service';

@Component({
  selector: 'app-reward-detail',
  templateUrl: './reward-detail.component.html',
  styleUrls: ['./reward-detail.component.css']
})
export class RewardDetailComponent {

  @Input() quest: Quest;

  constructor( public gameDataService: GameDataService ) { }

}
