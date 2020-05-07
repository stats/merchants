import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HeroService } from '../heroes/hero.service';
import { Hero } from '@models/hero.model';
import { ILocation } from '@models/location.model';
import { IAction } from '@models/action.model';
import { IRecipe } from '@models/recipe.model';
import { IItem } from '@models/item.model';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  public currentHero: Hero;
  public currentLocation: ILocation;
  public currentLocationKey: string;

  public alertText = "";
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

  setAlertAndShow(text: string, items: any = null, locations: any = null ) {
    this.alertText = text;
    this.alertItems = items;
    this.alertLocations = locations;
    this.showAlert = true;
  }

  use(): void {
    let dropArea = document.getElementById('item-drop-area');
    let items = [];
    dropArea.childNodes.forEach((child) => {
      if(child.nodeName == "SPAN") {
        items.push( (child["id"] as string).substring(6));
      }
    });
    let used: IAction = this.heroService.use(items);
    if(used) {
      this.setAlertAndShow(
        used.description,
        this.heroService.getItems(used.rewards),
        this.heroService.getLocations(used.unlockLocations)
      );
    } else {
      this.setAlertAndShow("You could not use those items here.");
    }
    this.clear();
  }

  craft(): void {
    let dropArea = document.getElementById('item-drop-area');
    let items = [];
    dropArea.childNodes.forEach((child) => {
      if(child.nodeName == "SPAN") {
        items.push( (child["id"] as string).substring(6));
      }
    });
    let crafted: IRecipe = this.heroService.craft(items);
    if(crafted) {
      this.setAlertAndShow(
        crafted.description,
        this.heroService.getItems(crafted.rewards)
      );
    } else {
      this.setAlertAndShow("You could not craft those items.");
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
