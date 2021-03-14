import { Component, OnInit } from '@angular/core';
import {User} from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(public userServ: UserService) { 
    
  }

  ngOnInit(): void {}

}
