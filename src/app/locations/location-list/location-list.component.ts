import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../heroes/hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css']
})
export class LocationListComponent implements OnInit {

  constructor(private heroService: HeroService, private router: Router) { }

  ngOnInit(): void {
    if(this.heroService.currentHero == null) {
      this.router.navigate(['/heroes']);
    }
  }

}
