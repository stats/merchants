import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { PageNotFoundComponent } from '@common/page-not-found/page-not-found.component';
import { SpriteComponent } from '@common/sprite/sprite.component';
import { HeroListComponent } from './heroes/hero-list/hero-list.component';
import { GameComponent } from './game/game.component';


import { HeroService } from './heroes/hero.service';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    SpriteComponent,
    HeroListComponent,
    GameComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
