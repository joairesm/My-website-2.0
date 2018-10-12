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
    themeTochoose: string;

    constructor(private gEM: globalEventManager) {
        this.themeTochoose = this.setThemebyTime((new Date()).getHours());
        console.log(this.themeTochoose)
     }

    ngOnInit() {
        this.gEM.changeTitleEmitter.subscribe(newTitle => {
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

    onToggleChange(result:boolean){
        console.log(result);
    }

    setThemebyTime(time:number):string{
        if(time > 8 && time < 20)
            return 'light';
        else
            return 'dark';
    }

}
