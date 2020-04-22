import { Component, Input } from '@angular/core';

import { Item } from '@core/items/shared/item.model';

@Component({
  selector: 'app-item-count',
  templateUrl: './item-count.component.html',
  styleUrls: ['./item-count.component.css']
})
export class ItemCountComponent {

  @Input() item: Item;
  @Input() itemCount: number;

  constructor() { }

}
