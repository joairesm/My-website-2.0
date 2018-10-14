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
    photos: any[];
    music: any[];
    
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
        if(this._spotifyService.cache != null){
            this.music = this._spotifyService.cache;
            return;
        }
        this._spotifyService.getMusic()
        .subscribe(
        (data) => {
            this.music = data;
            this._spotifyService.cache = this.music;
        },
        (error) => {
            console.log(error);
        });
    }

    getphotos(){
        if(this._instagramService.cache != null){
            this.photos = this._instagramService.cache;
            return;
        }
        this._instagramService.getFotos()
        .subscribe(
        (data) => {
            this.photos = data.data;
            this._instagramService.cache = this.photos;
        },
        (error) => {
            console.log(error);
        });
    }

}
