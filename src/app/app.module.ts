import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { QuestService } from './quests/quest.service';
import { TitleDescriptionComponent } from './common/title-description/title-description.component';
import { ItemQuantityComponent } from './items/item-quantity/item-quantity.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { HeroListComponent } from './heroes/hero-list/hero-list.component';
import { LocationListComponent } from './locations/location-list/location-list.component';
import { LocationDetailComponent } from './locations/location-detail/location-detail.component';
import { QuestDetailComponent } from './quests/quest-detail/quest-detail.component';
import { CraftListComponent } from './crafts/craft-list/craft-list.component';
import { CraftDetailComponent } from './crafts/craft-detail/craft-detail.component';
import { ItemListComponent } from './items/item-list/item-list.component';
import { ItemDetailComponent } from './items/item-detail/item-detail.component';
import { QuestListComponent } from './quests/quest-list/quest-list.component';
import { ItemBuyListComponent } from './items/item-buy-list/item-buy-list.component';
import { ItemSellListComponent } from './items/item-sell-list/item-sell-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleDescriptionComponent,
    ItemQuantityComponent,
    PageNotFoundComponent,
    HeroListComponent,
    LocationListComponent,
    LocationDetailComponent,
    QuestDetailComponent,
    CraftListComponent,
    CraftDetailComponent,
    ItemListComponent,
    ItemDetailComponent,
    QuestListComponent,
    ItemBuyListComponent,
    ItemSellListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    QuestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
