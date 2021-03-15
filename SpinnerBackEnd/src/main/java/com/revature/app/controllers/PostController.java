package com.revature.app.controllers;

import java.net.URI;
import java.util.Set;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.app.beans.Music;
import com.revature.app.beans.Post;
import com.revature.app.beans.User;
import com.revature.app.services.BandService;
import com.revature.app.services.MusicService;
import com.revature.app.services.PostService;

@RestController
@CrossOrigin(origins="http://localhost:4200", allowCredentials="true")
@RequestMapping(path="/posts")
public class PostController {
	private final PostService postServ;
	private final BandService bandServ;
	private final MusicService musicServ;
	
	@Autowired
	public PostController(PostService p, BandService b, MusicService m) {
		this.postServ = p;
		this.bandServ = b;
		this.musicServ = m;
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
}