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
    lighttheme: boolean;

    constructor(private gEM: globalEventManager) {
        this.lighttheme = this.setThemebyTime((new Date()).getHours());
        this.gEM.changeTheme(this.lighttheme);
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
        this.lighttheme = result;
        this.gEM.changeTheme(result);
    }

    setThemebyTime(time:number):boolean{
        if(time > 8 && time < 20)
            return true;
        
        else
            return false;
        
    }

}
