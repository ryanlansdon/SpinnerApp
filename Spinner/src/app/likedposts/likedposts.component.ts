import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service'

@Component({
  selector: 'app-likedposts',
  templateUrl: './likedposts.component.html',
  styleUrls: ['./likedposts.component.css']
})
export class LikedpostsComponent implements OnInit {

  constructor(public userServ: UserService) { }

  ngOnInit(): void {
  }

}
