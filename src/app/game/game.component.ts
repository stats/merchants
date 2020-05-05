import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HeroService } from '../heroes/hero.service';
import { Hero } from '@models/hero.model';
import { ILocation } from '@models/location.model';
import { identifierModuleUrl } from '@angular/compiler';

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

  allowDrop(event) {
    event.preventDefault();
  }

  drag(event) {
    event.dataTransfer.setData("text", event.target.id);
  }

  onDrop(event): void {
    event.preventDefault();
    const id = event.dataTransfer.getData("text/plain");
    if(event.target.querySelector("#craft_" + id)) return;
    let nodeCopy = document.getElementById(id).cloneNode(true);
    nodeCopy["id"] = "craft_" + id;
    event.target.appendChild(nodeCopy);
  }

  use(): void {

  }

  craft(): void {

  }

  clear(): void {
    let dropArea = document.getElementById('item-drop-area');
    while(dropArea.lastChild){
      if(dropArea.lastChild.nodeName == "P") return;
      dropArea.removeChild(dropArea.lastChild);
    }
  }

}
