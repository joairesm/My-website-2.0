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

    // Radar
    public radarChartLabels: string[] = ['Angular',
    '.NET', 'NODE.js', 'WPF', 'MVC', 'jQuery'];

    public radarChartColors: Array<any> = [
    {
        borderColor: 'rgba(148,159,177,1)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        //backgroundColor: 'rgba(225,10,24,0.2)'
    }
    ];

    public radarChartOptions:  any = {
        tooltips: {
            enabled: false
        },
        legend: { 
            display: false
            },
        pointLabels: {
            fontColor: 'white'
        },
        scale: {
            pointLabels: {
                fontSize: 14
            },
            ticks: {
                display: false,
                beginAtZero: true,
                max: 10
            },
        }
    };

    public radarChartData: any = [
    {data: [7, 6, 5, 7, 8, 9]}
    ];
    public radarChartType = 'radar';

}
