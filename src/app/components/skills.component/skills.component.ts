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
        this.changeGraphColors(this.lighttheme);
    }

    ngOnInit(): void { 
        this.gEM.changeTitle('skills');
        this.gEM.changeThemeEmitter.subscribe(newTheme => {
            this.lighttheme = newTheme;
            this.changeGraphColors(newTheme);
        });
    }

    // Radar
    public radarChartLabels: string[] = ['Angular',
    'NODE.js', 'WPF', '.NET', 'MVC', 'jQuery'];

    public radarChartColors: Array<any>;

    public radarChartOptions:  any;

    public radarChartData: any = [
    {data: [8, 6, 9, 7, 6, 5]}
    ];
    public radarChartType = 'radar';

    changeGraphColors(lightTheme: boolean){

        if(lightTheme){
            this.radarChartOptions = {
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
                    gridLines: { 
                        color: 'lightgrey' 
                    },
                    angleLines: { 
                        color: 'lightgrey' 
                    },
                    pointLabels: {
                        fontSize: 14,
                        fontColor:"grey",
                    },
                    ticks: {
                        display: false,
                        beginAtZero: true,
                        max: 10
                    },
                }
            };

            this.radarChartColors = [
                {
                    borderColor: '#9f7be1c9',
                    pointBackgroundColor: 'rgba(148,159,177,1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(148,159,177,0.8)'
                }
            ];
        }
        else{
            this.radarChartOptions = {
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
                    gridLines: { 
                        color: '#585858' 
                    },
                    angleLines: { 
                        color: '#585858' 
                    },
                    pointLabels: {
                        fontSize: 14,
                        fontColor:"#e7e7e7",
                    },
                    ticks: {
                        display: false,
                        beginAtZero: true,
                        max: 10
                    },
                }
            };

            this.radarChartColors = [
                {
                    borderColor: '#40E0D0',
                    pointBackgroundColor: 'rgba(148,159,177,1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(148,159,177,0.8)'
                }
            ];
        }


    }

}
