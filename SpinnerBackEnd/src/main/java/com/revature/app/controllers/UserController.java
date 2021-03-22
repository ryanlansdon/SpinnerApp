package com.revature.app.controllers;

import java.util.Map;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.app.beans.User;
import com.revature.app.exceptions.UsernameAlreadyTakenException;
import com.revature.app.services.UserService;

/*
 * GET user/login user logs in
 * POST user/register register a user
 */
@RestController
@CrossOrigin(origins="http://rev-spinner.s3-website.us-east-2.amazonaws.com", allowCredentials="true")
@RequestMapping(path = "/user")
public class UserController {
	private UserService userServ;
	private BCryptPasswordEncoder bCryptPasswordEncoder;

	@Autowired
	public UserController(UserService userServ) {
		this.userServ = userServ;
		this.bCryptPasswordEncoder = new BCryptPasswordEncoder();
	}

	@PostMapping("/register")
	public ResponseEntity<User> register(HttpSession session, @RequestBody User user) {
		user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
		try {
			userServ.addUser(user);
			User newUser = userServ.getUserById(user.getId());
			return ResponseEntity.ok(newUser);
		} catch (UsernameAlreadyTakenException e) {
			return ResponseEntity.badRequest().build();
		}
		
	}

	@PostMapping("/login")
	public ResponseEntity<User> login(HttpSession session, @RequestBody Map<String, String> userMap) {
		String username = userMap.get("username");
		String password = userMap.get("password");

		User attemptedLogin = userServ.getUserByUsername(username);
		if (attemptedLogin != null) {
			if (bCryptPasswordEncoder.matches(password, attemptedLogin.getPassword())) {
				session.setAttribute("user", attemptedLogin);
				return ResponseEntity.ok(attemptedLogin);
			} return ResponseEntity.badRequest().build();
		}
		return ResponseEntity.notFound().build();
	}
	
	@DeleteMapping("/login")
	public void logout(HttpSession session) {
		session.invalidate();
	}
	
	@GetMapping
	public void getUser(HttpSession session) {
		User u = (User) session.getAttribute("user");
		System.out.println(u);
	}
}
