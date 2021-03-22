import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../models/post';
import { Track } from '../models/result-model';
import { Token } from '../models/token';
import { GetTrackService } from '../services/get-track.service';
import { CommentService } from '../services/comment-service.service';
import { LikesService } from '../services/likes.service';
import { PostComment } from '../models/post-comment';
import { UserService } from '../services/user.service'
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {
  @Input() post: Post;
  token: Token;
  postTracks: Track[] = new Array();
  data:any;
  

  constructor(private getTrackServ: GetTrackService, private commentServ: CommentService, private likesServ: LikesService, private userServ: UserService) { }

  addComment(newComment: string): void {
    this.commentServ.add(this.post.id, newComment).subscribe(response => {this.post.comments.push(response)});
  }

  editComment(comment: PostComment): void {

  }

  deleteComment(comment: PostComment): void {
    let index = this.post.comments.indexOf(comment);
    console.log(index);
    if (index != -1) {
      this.commentServ.delete(comment).subscribe();
      this.post.comments.splice(index, 1);
    }
  }

  

  addLike(): void {
//     var found = false;
// for(var i = 0; i < this.userServ.loggedInUser.likedPosts.length; i++) {
//     if (this.userServ.loggedInUser.likedPosts[i].title == this.post.title) {
//         found = true;
//         break;
//     }
// }
  if(!this.userServ.loggedInUser.likedPosts.some(p => p.id===this.post.id)){
    this.post.likes++;    
} else{
    alert("you already liked this post");      
      
}
   
    
    this.likesServ.addLike(this.post.id).subscribe(response => {this.post=response});
  }

  addLikeComment(comment:any): void {
    if(!this.userServ.loggedInUser.likedComments.some(c => c.id===comment.id)){
      comment.likes++;
    }else{
      alert("you already liked this comment");
     }
    this.likesServ.addLikeComment(comment.id).subscribe(response => {this.post.comments});
  }


  ngOnInit(): void {
    for (let i = 0; i < this.post.songs.length; i++) {
      let track: Track;
      this.getTrackServ.getTrack(this.post.songs[i].songKey).subscribe(
        resp => {
          track = resp;
          this.postTracks.push(track);
        }
      );
    }
  }

}
