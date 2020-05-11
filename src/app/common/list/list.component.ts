import { Component, Input } from '@angular/core';
import { HeroService } from '@core/heroes/hero.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input() items: any;
  @Input() currentKey: string = "";
  @Input() setLocation: boolean = false;
  @Input() draggable: boolean = false;
  
  showDescription = "";

  constructor( private heroService:HeroService) { }

  hoverStart(key: string): void {
    this.showDescription = key;
  }

  hoverEnd(): void {
    this.showDescription = "";
  }

  click(key: string) {
    if(this.setLocation) this.heroService.setCurrentLocation(key);
  }

  show(key: string): boolean {
    return key == this.showDescription;
  }

}
