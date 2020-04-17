import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  name: string;

  constructor( public heroService: HeroService, private router: Router ) {

  }

  ngOnInit(): void {
    
  }

  addHero() {
    this.heroService.createHero(this.name);
  }

  selectHero(name: string) {
    this.heroService.setCurrentHero(name);
    this.router.navigate(['/locations']);
  }

}
