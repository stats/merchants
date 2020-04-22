import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { TitleDescriptionComponent } from './common/title-description/title-description.component';
import { PageNotFoundComponent } from './common/page-not-found/page-not-found.component';
import { HeroListComponent } from './heroes/hero-list/hero-list.component';
import { LocationListComponent } from './locations/location-list/location-list.component';
import { LocationDetailComponent } from './locations/location-detail/location-detail.component';
import { QuestDetailComponent } from './quests/quest-detail/quest-detail.component';
import { CraftListComponent } from './crafts/craft-list/craft-list.component';
import { CraftDetailComponent } from './crafts/craft-detail/craft-detail.component';
import { ItemDetailComponent } from './items/item-detail/item-detail.component';
import { InventoryComponent } from './inventory/inventory.component';

import { HeroService } from './heroes/hero.service';
import { GameDataService } from './common/game-data/game-data.service';

@NgModule({
  declarations: [
    AppComponent,
    TitleDescriptionComponent,
    PageNotFoundComponent,
    HeroListComponent,
    LocationListComponent,
    LocationDetailComponent,
    QuestDetailComponent,
    CraftListComponent,
    CraftDetailComponent,
    ItemDetailComponent,
    InventoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    HeroService,
    GameDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
