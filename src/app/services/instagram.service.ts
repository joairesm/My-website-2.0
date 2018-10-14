import { Injectable } from '@angular/core';
import {Jsonp} from '@angular/http';
import { map } from "rxjs/operators";
import { Model } from './../models/model';
import { Observable } from 'rxjs';

@Injectable()
export class InstagramService {

    private requestUrl: string;
    public cache: any;
    
    constructor(private _jsonp: Jsonp) {}

    getFotos() {
        var model = new Model();
        this.requestUrl = 'https://myawesomeapi-7d029.firebaseapp.com/instagram/latest?sec_code=' 
        + model.sec_code;

        return this._jsonp.request(this.requestUrl)
        .pipe(map(res => res.json()));
        
    }

}
