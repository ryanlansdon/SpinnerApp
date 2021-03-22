package com.revature.app.services;

import java.util.HashSet;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.revature.app.beans.DailyQuestion;
import com.revature.app.beans.Music;
import com.revature.app.beans.Post;
import com.revature.app.beans.QuestionResponse;
import com.revature.app.beans.User;
import com.revature.app.data.DailyQuestionDAO;
import com.revature.app.data.MusicDAO;
import com.revature.app.data.QuestionResponseDAO;
import com.revature.app.data.UserDAO;

@Service
public class DailyQuestionServiceImpl implements DailyQuestionService{
	
private DailyQuestionDAO dqDao;
private MusicDAO musicDao;
private QuestionResponseDAO qrDao;
private UserDAO userDao;

	
	@Autowired
	public DailyQuestionServiceImpl(DailyQuestionDAO dqd, MusicDAO md, QuestionResponseDAO qd, UserDAO ud) {
		dqDao = dqd;
		musicDao = md;
		qrDao = qd;
		userDao = ud;
	}
	
	@Override
	@Transactional
	public QuestionResponse addAnswer(QuestionResponse qr, User u) {
		Music songs = qr.getSong();
		System.out.println(songs);
			if (musicDao.findBySongKey(songs.getSongKey()) == null) {
				qr.setSong(musicDao.save(songs));
			} else {
				qr.setSong(musicDao.findBySongKey(songs.getSongKey()));
			}
		qr = qrDao.save(qr);
		DailyQuestion dq = getDailyQuestionById(qr.getQuestionDate().getDayOfMonth());
		Set<QuestionResponse> dqResponses = dq.getResponses();
		dqResponses.add(qr);
		dq.setResponses(dqResponses);
		dqDao.save(dq);
		u = userDao.getOne(u.getId());
		Set<QuestionResponse> userQuestionResp = u.getQotdResponses();
		userQuestionResp.add(qr);
		u.setQotdResponses(userQuestionResp);
		userDao.save(u);
		return qr;
	}


	@Override
	public DailyQuestion getDailyQuestionById(int dayOfMonth) {
		// TODO Auto-generated method stub
		return dqDao.findById(dayOfMonth).get();
		
		
	}

	@Override
	public QuestionResponse addLikeToResp(DailyQuestion dq, int dqrId, User loggedUser) {
		// TODO Auto-generated method stub
		
		Set<QuestionResponse> dqResponses = dq.getResponses();
		QuestionResponse res = dqResponses.stream().filter(a -> a.getId() == dqrId).collect(Collectors.toList()).get(0);
		int numLikes = res.getLikes();
		if (!(loggedUser.getLikedQotdResponses().contains(dqResponses))) {
			numLikes = numLikes+1;
			res.setLikes(numLikes);
			loggedUser = userDao.getOne(loggedUser.getId());
			Set<QuestionResponse> likedQotdResponses = loggedUser.getLikedQotdResponses();
			likedQotdResponses.add(res);
			loggedUser.setLikedQotdResponses(likedQotdResponses);
			userDao.save(loggedUser);
			qrDao.save(res);
			return res;
		}
		return res;
		
		
	}
	
	

}
