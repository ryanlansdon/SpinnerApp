import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { UrlService } from '../services/url.service';

@Component({
  selector: 'app-band',
  templateUrl: './band.component.html',
  styleUrls: ['./band.component.css']
})
export class BandComponent implements OnInit {
  baseUrl: string = this.urlServ.baseUrl + 'Spinner';
  name:String

  constructor(private http: HttpClient, private urlServ: UrlService ) { }

  ngOnInit(): void {
  }
  createBand(){
    let url= this.baseUrl+"/bands"
    this.http.post(url,{
      name:this.name
    }, {withCredentials: true}).subscribe((result)=>{
      console.log(result);
    })
  }

}
