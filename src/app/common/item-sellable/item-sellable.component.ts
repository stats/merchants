import { Component, Input } from '@angular/core';

import { Item } from '@core/items/shared/item.model';
import { HeroService } from '@core/heroes/hero.service';

@Component({
  selector: 'app-item-sellable',
  templateUrl: './item-sellable.component.html',
  styleUrls: ['./item-sellable.component.css']
})
export class ItemSellableComponent {

  @Input() items: Item[];
  @Input() buysMarkup: number;

  constructor(private heroService: HeroService) { }

  itemCost(cost: number) {
    return this.heroService.costWithMarkup(cost, this.buysMarkup);
  }

  canSell(item: Item): boolean {
    return this.heroService.canSellItem({key: item.key, count: 1});
  }

  sell(item: Item): void {
    if(this.canSell(item)) {
      this.heroService.sellItem(item, this.buysMarkup);
    }
  }

}
