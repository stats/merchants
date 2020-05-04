import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { HeroListComponent } from  './heroes/hero-list/hero-list.component';
import { GameComponent } from './game/game.component';

import { PageNotFoundComponent } from './common/page-not-found/page-not-found.component';
;

const appRoutes: Routes = [
  { path: 'heroes', component: HeroListComponent },
  { path: 'game', component: GameComponent },
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
