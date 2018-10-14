import { Injectable } from '@angular/core';
import {Jsonp} from '@angular/http';
import { map } from "rxjs/operators";
import { Model } from './../models/model';

@Injectable()
export class SpotifyService {

    private requestUrl: string;
    
    constructor(private _jsonp: Jsonp) {}

    getMusic() {
        var model = new Model();
        this.requestUrl = 'https://myawesomeapi-7d029.firebaseapp.com/spotify/latest?sec_code=' 
        + model.sec_code;

        return this._jsonp.request(this.requestUrl)
        .pipe(map(res => res.json()));
    }
}
