import { Component, AfterViewInit } from '@angular/core';
import { HeroService } from './heroes/hero.service';
import { Hero } from './heroes/shared/hero.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})
export class AppComponent {
  currentHero: Hero;

  constructor( public heroService: HeroService ) {
    this.heroService.currentHero$.subscribe(hero => {
      this.currentHero = hero
    });
  }

  ngAfterViewInit() {
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.fixed-action-btn');
      var instances = M.FloatingActionButton.init(elems, {});
    });
  }

}
