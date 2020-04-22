import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { HeroListComponent } from  './heroes/hero-list/hero-list.component';
import { LocationListComponent } from './locations/location-list/location-list.component';
import { LocationDetailComponent } from './locations/location-detail/location-detail.component';

import { QuestDetailComponent } from './quests/quest-detail/quest-detail.component';

import { CraftListComponent } from './crafts/craft-list/craft-list.component';
import { CraftDetailComponent } from './crafts/craft-detail/craft-detail.component';

import { ItemDetailComponent } from './items/item-detail/item-detail.component';

import { PageNotFoundComponent } from './common/page-not-found/page-not-found.component';

import { InventoryComponent } from './inventory/inventory.component';

const appRoutes: Routes = [
  { path: 'heroes', component: HeroListComponent },
  { path: 'locations', component: LocationListComponent },
  { path: 'locations/:key', component: LocationDetailComponent },
  { path: 'quests/:key', component: QuestDetailComponent },
  { path: 'crafts', component: CraftListComponent },
  { path: 'crafts/:key', component: CraftDetailComponent },
  { path: 'inventroy', component: InventoryComponent },
  { path: 'items/:key', component: ItemDetailComponent },
  { path: '', redirectTo: '/heroes', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
