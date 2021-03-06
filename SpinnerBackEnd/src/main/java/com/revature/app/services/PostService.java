package com.revature.app.services;

import java.util.Set;

import com.revature.app.beans.Band;
import com.revature.app.beans.Music;
import com.revature.app.beans.Post;
import com.revature.app.beans.PostComment;
import com.revature.app.beans.User;

public interface PostService {
	public Integer addPost(Post p, User u);
	public Post getPostById(int id);
	public Set<Post> getAllPosts();
	public Set<Post> getPostsByBand(Band b);
	public Set<Post> getPostsBySong(Music m);
	public void deletePost(Post p);
	
	public Integer addComment(PostComment comment, Post p, User u);
	public void updateComment(PostComment comment);
	public void deleteComment(PostComment comment);
	
	public Post addLike(Post p, User u);
	public PostComment getPostCommentById(int id);
	public PostComment addPostCommentLike(PostComment postComment, User u);

}
