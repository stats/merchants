import { Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sprite',
  templateUrl: './sprite.component.html',
  styleUrls: ['./sprite.component.css']
})
export class SpriteComponent implements OnInit {

    @Input() key: string;
    @Input() draggable: boolean = false;

    showTooltip: boolean = false;

    allowDrop(event) {
        event.preventDefault();
    }
    
    drag(event) {
        event.dataTransfer.setData("text", event.target.id);

    }

    constructor() { }

    ngOnInit(): void {

    }

}
