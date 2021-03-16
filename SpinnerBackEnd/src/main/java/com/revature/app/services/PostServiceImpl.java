package com.revature.app.services;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.revature.app.beans.Band;
import com.revature.app.beans.Music;
import com.revature.app.beans.Post;
import com.revature.app.beans.PostComment;
import com.revature.app.beans.User;
import com.revature.app.data.CommentDAO;
import com.revature.app.data.MusicDAO;
import com.revature.app.data.PostDAO;
import com.revature.app.data.UserDAO;

@Service
public class PostServiceImpl implements PostService {
	private PostDAO postDAO;
	private UserDAO userDAO;
	private MusicDAO musicDAO;
	private CommentDAO commentDAO;
	
	@Autowired
	public PostServiceImpl(PostDAO p, UserDAO u, MusicDAO m, CommentDAO c) {
		postDAO = p;
		userDAO = u;
		musicDAO = m;
		commentDAO = c;
	}

	@Override
	@Transactional
	public Integer addPost(Post p, User u) {
		Set<Music> songs = p.getSongs();
		System.out.println(songs);
		Set<Music> addedSongs = new HashSet<>();
		for (Music s : songs) {
			if (musicDAO.findBySongKey(s.getSongKey()) == null) {
				addedSongs.add(musicDAO.save(s));
			} else {
				addedSongs.add(musicDAO.findBySongKey(s.getSongKey()));
			}
		}
		p.setSongs(addedSongs);
		p = postDAO.save(p);
		u = userDAO.getOne(u.getId());
		Set<Post> userPosts = u.getPosts();
		userPosts.add(p);
		u.setPosts(userPosts);
		userDAO.save(u);
		return p.getId();
	}

	@Override
	public Set<Post> getAllPosts() {
		List<Post> postList = postDAO.findAll();
		Set<Post> posts = new HashSet<>();
		posts.addAll(postList);
		return posts;
	}

	@Override
	public Set<Post> getPostsByBand(Band b) {
		return postDAO.findByBand(b);
	}

	@Override
	public void deletePost(Post p) {
		postDAO.delete(p);
	}

	@Override
	public Set<Post> getPostsBySong(Music m) {
		return postDAO.findBySongsContaining(m);
	}

	@Override
	@Transactional
	public Integer addComment(PostComment comment, Post p, User u) {
		p.getComments().add(comment);
		u.getComments().add(comment);
		commentDAO.save(comment);
		postDAO.save(p);
		userDAO.save(u);
		return comment.getId();
	}

	@Override
	public Set<PostComment> getCommentsByUser(User u) {
		return commentDAO.findByUser(u);
	}

	@Override
	public Set<PostComment> getCommentsByPost(Post p) {
		return commentDAO.findByPost(p);
	}

	@Override
	public void updateComment(PostComment comment) {
		if (comment.getId() != null) {
			commentDAO.save(comment);
		} 
	}

	@Override
	public void deleteComment(PostComment comment) {
		commentDAO.delete(comment);
		
	}

	@Override
	public Post getPostById(int id) {
		return postDAO.getOne(id);
	}

	
	

}
