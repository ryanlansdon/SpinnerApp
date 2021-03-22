package com.revature.app.controllers;

import java.net.URI;
import java.time.LocalDate;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.app.beans.DailyQuestion;
import com.revature.app.beans.Post;
import com.revature.app.beans.QuestionResponse;
import com.revature.app.beans.User;
import com.revature.app.services.DailyQuestionService;
import com.revature.app.services.UserService;

@RestController
@CrossOrigin(origins="http://rev-spinner.s3-website.us-east-2.amazonaws.com", allowCredentials="true")
@RequestMapping(path="/dailyquestions")

public class DailyQuestionController {
	
	private final DailyQuestionService dqServ;
	private final UserService userServ;
	
	@Autowired
	public DailyQuestionController(DailyQuestionService dq, UserService u) {
		this.dqServ = dq;
		this.userServ = u;
	}
	
	@PostMapping
	public ResponseEntity<QuestionResponse> addAnswer(HttpSession session, @RequestBody QuestionResponse qr) {
		User user = (User) session.getAttribute("user");
		System.out.println("HEERE BOZO" + user);
		qr = dqServ.addAnswer(qr, user);
		return ResponseEntity.ok(qr);
	}
	
	@GetMapping()
	public ResponseEntity<DailyQuestion> getByDay() {
		DailyQuestion dQuestion = dqServ.getDailyQuestionById(LocalDate.now().getDayOfMonth());
		if (dQuestion != null) {
			return ResponseEntity.ok(dQuestion);
		}
		return ResponseEntity.notFound().build();
	}
	
	@PutMapping(path="/responses/likes/{dqrId}")
	public ResponseEntity<QuestionResponse> addLike(HttpSession session, @PathVariable("dqrId") int dqrId) {
		User loggedUser = (User) session.getAttribute("user");
		if (loggedUser != null) {
			DailyQuestion dq = dqServ.getDailyQuestionById(LocalDate.now().getDayOfMonth());
			if (dq != null) {
				
				System.out.println("before calling add like");
				QuestionResponse newResp = dqServ.addLikeToResp(dq, dqrId, loggedUser);
				System.out.println(newResp);
				
				System.out.println("after calling add like");

				loggedUser = userServ.getUserById(loggedUser.getId());
				session.setAttribute("user", loggedUser);
				System.out.println("new post response" + newResp);
				System.out.println("users liked posts" + loggedUser);


				return ResponseEntity.ok(newResp);
				

			}
			
			return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).build();
		}
		return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
	}
	
	
	
	

}
