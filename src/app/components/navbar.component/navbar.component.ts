import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { globalEventManager } from '../../services/globalEventManager.service';

@Component({
    selector: 'navbar-component',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    @ViewChild('animatedTitle') aTitle: ElementRef;

    title : any;
    className: string = '';

    constructor(private gEM: globalEventManager) { }

    ngOnInit() {
        this.gEM.change.subscribe(newTitle => {
            this.title = newTitle;
            this.setClassName('animate');
        });
    }

    setClassName(newClass) {
        this.className = newClass
    
        setTimeout(() => {
            this.className = "";
          }, 500);
    }

}
