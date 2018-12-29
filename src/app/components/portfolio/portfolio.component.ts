import { Component, OnInit } from '@angular/core';
import { globalEventManager } from 'src/app/services/globalEventManager.service';

@Component({
    selector: 'app-portfolio',
    templateUrl: './portfolio.component.html',
    styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
    lighttheme: boolean;

    constructor(private gEM: globalEventManager) { 
        this.lighttheme = gEM.lighttheme;
    }

    ngOnInit(): void { 
        this.gEM.changeTitle('portfolio');
        this.gEM.changeThemeEmitter.subscribe(newTheme => {
            this.lighttheme = newTheme;
        });
    }
}
