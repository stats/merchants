import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HeroService } from '../heroes/hero.service';
import { Hero } from '@models/hero.model';
import { Location } from '@models/location.model';
import { IRecipe } from '@models/recipe.model';
import { IItem } from '@models/item.model';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  public currentHero: Hero;
  public currentLocation: Location;
  public currentLocationKey: string;

  public alertText = "";
  public alertItemsTried: any;
  public alertItems: any;
  public alertLocations: any;
  public buttonText = "Ok";
  public showAlert = false;

  constructor(public heroService: HeroService) {
    this.heroService.currentHero$.subscribe(hero => {
      this.currentHero = hero
    });
    this.heroService.currentLocation$.subscribe(location => {
      this.currentLocation = location;
      this.currentLocationKey = this.heroService.getCurrentLocationKey();
      console.log(this.currentLocation);
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

  setLocation(key: string): void {
    this.heroService.setCurrentLocation(key);
  }

  setAlertAndShow(text: string, items: any = null, locations: any = null, itemsTried: any = null ) {
    this.alertText = text;
    this.alertItems = items;
    this.alertLocations = locations;
    this.alertItemsTried = itemsTried;
    this.showAlert = true;
  }

  combine(): void {
    let dropArea = document.getElementById('item-drop-area');
    let items = [];
    dropArea.childNodes.forEach((child) => {
      if(child.nodeName == "SPAN") {
        items.push( (child["id"] as string).substring(6));
      }
    });

    let crafted: IRecipe = this.heroService.craft(items);
    console.log(crafted);
    if(crafted) {
      this.setAlertAndShow(
        crafted.description,
        this.heroService.getItems(crafted.rewards),
        this.heroService.getLocations(crafted.unlockLocations),
      );
    } else {
      this.setAlertAndShow("Nothing happenned when you tried to craft", null, null, this.heroService.getItems(items));
    }

    this.clear();
  }

  hideAlert() {
    this.showAlert = false;
  }

  clear(): void {
    let dropArea = document.getElementById('item-drop-area');
    while(dropArea.lastChild){
      if(dropArea.lastChild.nodeName == "P") return;
      dropArea.removeChild(dropArea.lastChild);
    }
  }

}
