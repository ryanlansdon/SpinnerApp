package com.revature.app.services;

import java.util.HashSet;
import java.util.Set;

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
	public DailyQuestionServiceImpl(DailyQuestionDAO dqd) {
		dqDao = dqd;
		
	}
	
	@Override
	@Transactional
	public Integer addAnswer(QuestionResponse qr, User u) {
		Music songs = qr.getSong();
		System.out.println(songs);
			if (musicDao.findBySongKey(songs.getSongKey()) == null) {
				qr.setSong(musicDao.save(songs));
			} else {
				qr.setSong(musicDao.findBySongKey(songs.getSongKey()));
			}
		qr = qrDao.save(qr);
		u = userDao.getOne(u.getId());
		Set<QuestionResponse> userQuestionResp = u.getQotdResponses();
		userQuestionResp.add(qr);
		u.setQotdResponses(userQuestionResp);
		userDao.save(u);
		return qr.getId();
	}


	@Override
	public DailyQuestion getDailyQuestionById(int dayOfMonth) {
		// TODO Auto-generated method stub
		return dqDao.findById(dayOfMonth).get();
		
		
	}
	
	

}