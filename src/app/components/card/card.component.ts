import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent {

    @Input('animate') animate: boolean;
    @Input('lighttheme') lighttheme: boolean;
    @Input('img-src') imgsrc: string;
    @Input('fa-icon') faicon:string;
    @Input('xl') xl:boolean;

}
