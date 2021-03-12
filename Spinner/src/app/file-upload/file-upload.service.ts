import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  baseUrl= "ourURL"
  constructor(private http:HttpClient) { }

  upload(file):Observable<any>{
    const formData=new FormData(); //creating our form data
    formData.append("file", file, file.name); //stores whatever file user uploads
    return this.http.post(this.baseUrl, formData) //this will http post our formData request
  }
}
