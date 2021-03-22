import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UrlService {
    readonly baseUrl: string;

    constructor(){
        //this.baseUrl = 'http://localhost:8080/Spinner';
        this.baseUrl = 'http://ec2-3-139-86-183.us-east-2.compute.amazonaws.com:8081/Spinner';
    }
}
