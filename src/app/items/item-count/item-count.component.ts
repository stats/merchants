import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-count',
  templateUrl: './item-count.component.html',
  styleUrls: ['./item-count.component.css']
})
export class ItemCountComponent implements OnInit {

  @Input()
  name = "";

  @Input()
  description = "";

  @Input()
  key = "";

  @Input()
  count = "";

  constructor() { }

  ngOnInit(): void {
  }

}
