import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loggedInUser : User;
  
  constructor() { 
    
  }

  ngOnInit(): void {}

}
class User {

}
