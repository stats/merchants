import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-quantity',
  templateUrl: './item-quantity.component.html',
  styleUrls: ['./item-quantity.component.css']
})
export class ItemQuantityComponent implements OnInit {

  @Input()
  name = "";

  @Input()
  description = "";

  @Input()
  key = "";

  @Input()
  quantity = "";

  constructor() { }

  ngOnInit(): void {
  }

}
