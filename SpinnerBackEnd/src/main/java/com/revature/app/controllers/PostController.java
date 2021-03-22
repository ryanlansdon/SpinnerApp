package com.revature.app.controllers;

import java.net.URI;
import java.util.Set;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.revature.app.beans.Music;
import com.revature.app.beans.Post;
import com.revature.app.beans.PostComment;
import com.revature.app.beans.User;
import com.revature.app.services.BandService;
import com.revature.app.services.MusicService;
import com.revature.app.services.PostService;
import com.revature.app.services.UserService;

@RestController
@CrossOrigin(origins="http://localhost:4200", allowCredentials="true")
@RequestMapping(path="/posts")
public class PostController {
	private final PostService postServ;
	private final BandService bandServ;
	private final MusicService musicServ;
	private final UserService userServ;
	
	@Autowired
	public PostController(PostService p, BandService b, MusicService m, UserService u) {
		this.postServ = p;
		this.bandServ = b;
		this.musicServ = m;
		this.userServ = u;
	}
	
	@PostMapping
	public ResponseEntity<Post> addPost(HttpSession session, @RequestBody Post post) {
		User user = (User) session.getAttribute("user");
		Integer id = postServ.addPost(post, user);
		return ResponseEntity.created(URI.create("http://localhost:8080/Spinner/posts/" + id)).build();
	}
	
	@GetMapping
	public ResponseEntity<Set<Post>> getAllPosts() {
		Set<Post> posts = postServ.getAllPosts();
		return ResponseEntity.ok(posts);
	}
	
	@GetMapping(path="/band/{id}")
	public ResponseEntity<Set<Post>> getPostsByBand(@PathVariable("id") Integer id) {
		Set<Post> posts = postServ.getPostsByBand(bandServ.getBandById(id));
		return ResponseEntity.ok(posts);
	}
	
	@GetMapping(path="/song/{key}")
	public ResponseEntity<Set<Post>> getPostsBySongKey(@PathVariable("key") String key) {
		Music song = musicServ.getSongBySongKey(key);
		Set<Post> posts = postServ.getPostsBySong(song);
		return ResponseEntity.ok(posts);
	}
	
	@GetMapping(path="/comment/{postId}")
	public ResponseEntity<Set<PostComment>> getCommentsByPostId(@PathVariable("postId") int postId) {
		Post post = postServ.getPostById(postId);
		if (post == null) return ResponseEntity.notFound().build();
		return ResponseEntity.ok(post.getComments());
	}
	
	@PostMapping(path="/comment/{postId}")
	public ResponseEntity<PostComment> addCommentToPost(HttpSession session, 
														@PathVariable("postId") int postId, 
														@RequestBody PostComment comment) {
		
		Post post = postServ.getPostById(postId);
		User user = (User) session.getAttribute("user");
		postServ.addComment(comment, post, user);
		return ResponseEntity.ok(comment);
	}
	
	@PutMapping(path="/comment")
	public ResponseEntity<PostComment> updateComment(@RequestBody PostComment comment) {
		postServ.updateComment(comment);
		return ResponseEntity.ok(comment);
	}
	
	@DeleteMapping(path="/comment/{id}")
	public void deleteComment(@PathVariable("id") int id) {
		System.out.println("BAM");
		PostComment comment = postServ.getPostCommentById(id);
		postServ.deleteComment(comment);
	}
	
	@PutMapping(path="/likes/{postId}")
	public ResponseEntity<Post> addLike(HttpSession session, @PathVariable("postId") int postId) {
		User loggedUser = (User) session.getAttribute("user");
		if (loggedUser != null) {
			Post post = postServ.getPostById(postId);
			if (post != null) {
				System.out.println("before calling add like post");
				Post newPost = postServ.addLike(post, loggedUser);
				System.out.println("after calling add like post");

				return ResponseEntity.ok(newPost);
			}
			return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).build();
		}
		return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
					
	}
	
	
	@PutMapping(path="/comments/{postCommentId}")
	public ResponseEntity<PostComment> likeCommentPost(HttpSession session, @PathVariable("postCommentId") int postCommentId) {
		
		System.out.println("I ma in the serbebr");
		User loggedUser = (User) session.getAttribute("user");
		if (loggedUser != null) {
			PostComment postComment = postServ.getPostCommentById(postCommentId);
             if (postComment != null) {
				
				System.out.println("before calling add like");
				PostComment newPostComment = postServ.addPostCommentLike(postComment, loggedUser);
				
				System.out.println("after calling add like");

				loggedUser = userServ.getUserById(loggedUser.getId());
				session.setAttribute("user", loggedUser);
				System.out.println("new post response" + newPostComment);
				System.out.println("users liked posts" + loggedUser);

				return ResponseEntity.ok(newPostComment);
				

			}

 			return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).build();
		}
		return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();

	}
	
	
	
	
	
	
	
}
