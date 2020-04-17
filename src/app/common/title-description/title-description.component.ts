import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title-description',
  templateUrl: './title-description.component.html',
  styleUrls: ['./title-description.component.css']
})
export class TitleDescriptionComponent implements OnInit {

  @Input()
  title = "";

  @Input()
  type = "";

  @Input()
  key = "";

  @Input()
  description = "";

  constructor() { }

  ngOnInit(): void {
  }

}
