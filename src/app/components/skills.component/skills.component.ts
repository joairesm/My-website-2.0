import { Component, OnInit } from '@angular/core';
import { globalEventManager } from '../../services/globalEventManager.service';

@Component({
    selector: 'skills-component',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
    
    lighttheme: boolean;

    constructor(private gEM: globalEventManager) { 
        this.lighttheme = gEM.lighttheme;
    }

    ngOnInit(): void { 
        this.gEM.changeTitle('skills');
        this.gEM.changeThemeEmitter.subscribe(newTheme => {
            this.lighttheme = newTheme;
        });
    }
}
