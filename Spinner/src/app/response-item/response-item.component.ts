import { Component, OnInit, Input } from '@angular/core';
import { QuestionResponse } from '../models/question-response';
import { Track } from '../models/result-model';
import { GetTrackService } from '../services/get-track.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LikesService } from '../services/likes.service';
import { UserService } from '../services/user.service'



@Component({
  selector: 'app-response-item',
  templateUrl: './response-item.component.html',
  styleUrls: ['./response-item.component.css']
})
export class ResponseItemComponent implements OnInit {
  @Input() response: QuestionResponse;
  track: Track;

  constructor(private getTrackServ: GetTrackService, private likesServ: LikesService, private userServ: UserService) { }

  ngOnInit(): void {
    this.getTrackServ.getTrack(this.response.song.songKey).subscribe(
      resp => {
        this.track = resp;
      }
    );
  }
  
  addLikeQuestionResp(response:any): void{
    if(!this.userServ.loggedInUser.likedQotdResponses.some(qr => qr.id===response.id)){
      response.likes++;
    }else{
      alert("you already liked this comment");
     }
    this.likesServ.addLikeQR(this.response.id).subscribe(response => {this.response=response});
  }

}
