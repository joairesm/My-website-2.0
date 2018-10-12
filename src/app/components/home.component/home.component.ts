import { Component, OnInit } from '@angular/core';
import { globalEventManager } from '../../services/globalEventManager.service';

@Component({
    selector: 'home-component',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    lighttheme: boolean;
    
    constructor(private gEM: globalEventManager) {         
        this.lighttheme = gEM.lighttheme;
    }

    ngOnInit(): void { 
        this.gEM.changeTitle('hello');
        this.gEM.changeThemeEmitter.subscribe(newTheme => {
            this.lighttheme = newTheme;
        });
    }
}
