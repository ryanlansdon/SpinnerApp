import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';


//import { HttpClient } from '@angular/common/http';
//import * as Rx from "rxjs/Rx";
import { from, Observable, throwError } from 'rxjs';
import { EditUserComponent } from '../edit-user/edit-user.component';
import { map,catchError }from 'rxjs/operators';
//import { Http, Response, Headers, RequestOptions } from '@angular/http';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/do';

@Injectable({
  providedIn: 'root'
})
export class EditUserService {

  constructor(private http:HttpClient) { }
  /*
  saveProfilePic(profile_pic){
    return this.http.post('http://localhost:4200/edit-profile/SaveProfilePic', profile_pic).subscribe((response: Response) => response.json())
  }
  getProfilePic(){
    return this.http.get('http://localhost:4200/edit-profile/getProfilePic').subscribe((response: Response) => response.json())
  }
  deleteProfilePic(){
    return this.http.post('http://localhost:4200/edit-profile/deleteProfilePic', {'id':'id'}).subscribe((response: Response)=> response.json())
  }*/
  

  upload(file):Observable<any>{
    const formData=new FormData(); //creating our form data
    formData.append("file", file, file.name); //stores whatever file user uploads
    return this.http.post('http://localhost:4200/edit-profile/SaveProfilePic', formData, {withCredentials: true}) //this will http post our formData request
  }
}
