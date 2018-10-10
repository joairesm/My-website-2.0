import { Component, OnInit } from '@angular/core';
import { globalEventManager } from 'src/app/services/globalEventManager.service';

@Component({
    selector: 'skills-component',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
    
    constructor(private gEM: globalEventManager) { }

    ngOnInit(): void { 
        this.gEM.changeTitle('Skills');
    }
}
