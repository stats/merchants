import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../heroes/hero.service';
import { Hero } from '../../heroes/shared/hero.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css']
})
export class LocationListComponent implements OnInit {

  currentHero: Hero;

  constructor(public heroService: HeroService, private router: Router) {
    this.heroService.currentHero$.subscribe(hero => {
      this.currentHero = hero
    });
  }

  ngOnInit(): void {
    if(this.currentHero == null) {
      this.router.navigate(['/heroes']);
    }
  }

  selectLocation(key: string) {

  }

}
