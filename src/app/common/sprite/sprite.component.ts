import { Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sprite',
  templateUrl: './sprite.component.html',
  styleUrls: ['./sprite.component.css']
})
export class SpriteComponent implements OnInit {

    @Input() key: string;
    @Input() tooltip: string;

    showTooltip: boolean = false;

    allowDrop(event) {
        event.preventDefault();
    }
    
    drag(event) {
        event.dataTransfer.setData("text", event.target.id);
        this.showTooltip = false;
    }

    hoverStart(event) {
        this.showTooltip = true;
    }

    hoverEnd(event) {
        this.showTooltip = false;
    }

    constructor() { }

    ngOnInit(): void {

    }

}
