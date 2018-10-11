import { Component, OnInit } from '@angular/core';
import { globalEventManager } from '../../services/globalEventManager.service';

@Component({
    selector: 'home-component',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    
    constructor(private gEM: globalEventManager) { }

    ngOnInit(): void { 
        this.gEM.changeTitle('hello');
    }
}
