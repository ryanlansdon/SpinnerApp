import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {UrlService} from './url.service';
import { PostComment } from '../models/post-comment';
import { UserService } from './user.service';

@Injectable({
    providedIn: 'root'
  })
export class CommentService {

    baseUrl: string;
    
    constructor(private http: HttpClient, private urlServ: UrlService, private userServ: UserService) {
        this.baseUrl = this.urlServ.baseUrl;
    }

    add(postId: number, newCommentString: string): Observable<PostComment> {
        let newComment = new PostComment();
        newComment.comment = newCommentString;
        newComment.user_id = this.userServ.loggedInUser.id;

        return this.http.post(this.baseUrl + '/posts/comment/' + postId, newComment, {withCredentials: true}).pipe(map(response => response as PostComment));
    }

    delete(comment: PostComment): Observable<PostComment> {
        return this.http.delete(this.baseUrl + '/posts/comment/' + comment.id, {withCredentials: true}).pipe(map(response => response as PostComment));
    }

}
