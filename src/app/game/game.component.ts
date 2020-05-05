import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HeroService } from '../heroes/hero.service';
import { Hero } from '@models/hero.model';
import { ILocation } from '@models/location.model';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  public currentHero: Hero;
  public currentLocation: ILocation;
  public currentLocationKey: string;

  constructor(public heroService: HeroService) {
    this.heroService.currentHero$.subscribe(hero => {
      this.currentHero = hero
    });
    this.heroService.currentLocation$.subscribe(location => {
      this.currentLocation = location;
      this.currentLocationKey = this.heroService.getCurrentLocationKey();
    })
  }

  ngOnInit(): void {

  }

}
