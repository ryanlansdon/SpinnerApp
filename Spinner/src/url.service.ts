import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UrlService {
    baseUrl: string;

    constructor(){
        this.baseUrl = 'http://localhost:8080/Spinner';
    }
}
