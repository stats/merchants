import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reward-unlock',
  templateUrl: './reward-unlock.component.html',
  styleUrls: ['./reward-unlock.component.css']
})
export class RewardUnlockComponent {

  @Input() name: string;
  @Input() type: string;
  @Input() imageKey: string;

  constructor() { }


}
