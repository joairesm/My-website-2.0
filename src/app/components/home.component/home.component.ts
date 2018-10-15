import { Component, OnInit } from '@angular/core';
import { globalEventManager } from '../../services/globalEventManager.service';
import { InstagramService } from '../../services/instagram.service';
import { SpotifyService } from '../../services/spotify.service';

@Component({
    selector: 'home-component',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    lighttheme: boolean;
    photos: any;
    music: any;
    
    constructor(
        private gEM: globalEventManager, 
        private _instagramService: InstagramService,
        private _spotifyService: SpotifyService) { 

        this.lighttheme = gEM.lighttheme;
        
        this.getmusic();
        this.getphotos();
    }
    
    ngOnInit(): void { 
        this.gEM.changeTitle('hello');
        this.gEM.changeThemeEmitter.subscribe(newTheme => {
            this.lighttheme = newTheme;
        });
    }

    getmusic(){
        this._spotifyService.getMusic()
        .subscribe(
        (data) => {
            this.music = data;
        },
        (error) => {
            console.log(error);
        });
    }

    getphotos(){
        this._instagramService.getFotos()
        .subscribe(
        (data) => {
            this.photos = data;
        },
        (error) => {
            console.log(error);
        });
    }

}
