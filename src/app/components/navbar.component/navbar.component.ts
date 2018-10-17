import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { globalEventManager } from '../../services/globalEventManager.service';

@Component({
    selector: 'navbar-component',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, AfterViewInit {
    @ViewChild('animatedTitle') aTitle: ElementRef;

    title : any;
    className: string = '';
    themeTochoose: string;
    lighttheme: boolean;

    constructor(private gEM: globalEventManager,
                private elementRef: ElementRef) {
        this.lighttheme = this.setThemebyTime((new Date()).getHours());
        this.gEM.changeTheme(this.lighttheme);
     }

    ngOnInit() {
        this.gEM.changeTitleEmitter.subscribe(newTitle => {
            this.title = newTitle;
            this.setClassName('animate');
        });
    }

    ngAfterViewInit(){
        this.changeBodyColor(this.lighttheme);
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
        this.changeBodyColor(result);
    }

    setThemebyTime(time:number):boolean{
        console.log('time ->' + time);
        if(time >= 8 && time <= 18)
            return true;
        
        else
            return false;
        
    }

    bodyBackground(lightTheme:boolean):string{
        if(lightTheme)
            return 'rgb(231, 231, 231)'
        else
            return '#343a40';
    }

    changeBodyColor(lightTheme:boolean){
        var newcolor = lightTheme ? 'rgb(231, 231, 231)' : '#343a40';

        this.elementRef
            .nativeElement
            .ownerDocument
            .body
            .style
            .backgroundColor = this.bodyBackground(this.lighttheme);
    }

}
