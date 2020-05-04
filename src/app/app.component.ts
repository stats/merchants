import { Component } from '@angular/core';
import { HeroService } from './heroes/hero.service';
import { IHero } from '@models/hero.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentHero: IHero;

  constructor( public heroService: HeroService ) {
    this.heroService.currentHero$.subscribe(hero => {
      this.currentHero = hero
    });
  }

}
