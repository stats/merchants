import { Component, Input } from '@angular/core';

import { Item } from '@core/items/shared/item.model';
import { HeroService } from '@core/heroes/hero.service';

@Component({
  selector: 'app-item-buyable',
  templateUrl: './item-buyable.component.html',
  styleUrls: ['./item-buyable.component.css']
})
export class ItemBuyableComponent {

  @Input() items: Item[];
  @Input() sellsMarkup: number;

  constructor(private heroService: HeroService) { }

  itemCost(cost: number) {
    return this.heroService.costWithMarkup(cost, this.sellsMarkup);
  }

  canBuy(item: Item): boolean {
    return this.heroService.canBuyItem(this.itemCost(item.cost));
  }

  buy(item: Item): void {
    if(this.canBuy(item)) {
      this.heroService.buyItem(item, this.sellsMarkup);
    }
  }

}
