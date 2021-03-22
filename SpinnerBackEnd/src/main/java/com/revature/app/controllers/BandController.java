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

import com.revature.app.beans.Band;

import com.revature.app.beans.User;
import com.revature.app.exceptions.BandNoLonguerAvailableException;
import com.revature.app.services.BandService;
import com.revature.app.services.UserService;


@RestController
@CrossOrigin(origins="http://rev-spinner.s3-website.us-east-2.amazonaws.com", allowCredentials="true")
@RequestMapping(path="/bands")

public class BandController {
	private final BandService bandServ;
	private final UserService userServ;
	
	@Autowired
	public BandController(BandService b, UserService u) {
		this.bandServ = b;
		this.userServ = u;
	}
	
	@PostMapping
	public ResponseEntity<Band> addBand(@RequestBody Band band) {
		Integer id = bandServ.addBand(band);
		return ResponseEntity.created(URI.create("http://localhost:8080/Spinner/bands/" + id)).build();
	}
	
	@GetMapping
	public ResponseEntity<Set<Band>> getAllBands() {
		Set<Band> bands = bandServ.getAllBands();
		return ResponseEntity.ok(bands);
	}
	
	@GetMapping(path="/{id}")
	public ResponseEntity<Band> getById(@PathVariable("id") Integer id) {
		Band band = bandServ.getBandById(id);
		if (band != null) {
			return ResponseEntity.ok(band);
		}
		return ResponseEntity.notFound().build();
	}
	
	@DeleteMapping(path="/{id}")
	public ResponseEntity<Void> deleteCat(@PathVariable("id") Integer id, @RequestBody Band band) {
		if (band != null && id.equals(band.getId())) {
			bandServ.deleteBand(band);
			return ResponseEntity.noContent().build();
		}
		return ResponseEntity.badRequest().build();
	}
	
	@PutMapping(path="/join/{id}")
	public ResponseEntity<Void> joinBand(HttpSession session, @PathVariable("id") Integer id) throws BandNoLonguerAvailableException {
		User loggedUser = (User) session.getAttribute("user");
		if (loggedUser != null) {
			Band band = bandServ.getBandById(id);
			if (band != null) {
				bandServ.joinBand(band, loggedUser);
				loggedUser = userServ.getUserById(loggedUser.getId());
				session.setAttribute("user", loggedUser);
				return ResponseEntity.ok().build();
			}
			return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).build();
		}
		return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
	}
	

}
