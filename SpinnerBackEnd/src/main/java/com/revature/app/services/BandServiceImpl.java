package com.revature.app.services;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.app.beans.Band;
import com.revature.app.data.BandDAO;


@Service
public class BandServiceImpl implements BandService {
	private BandDAO bandDao;
	
	@Autowired
	public BandServiceImpl(BandDAO b) {
		bandDao = b;
		
	}

	@Override
	public Integer addBand(Band b) {
		// TODO Auto-generated method stub
		return bandDao.save(b).getId();
	}

	@Override
	public Set<Band> getAllBands() {
		// TODO Auto-generated method stub
		List<Band> bandList = bandDao.findAll();
		Set<Band> bandSet = new HashSet<>();
		bandSet.addAll(bandList);
		return bandSet;
	}
	
	@Override
	public Band getBandById(Integer id) {
		// TODO Auto-generated method stub
		return bandDao.getOne(id);
	}


	@Override
	public void deleteBand(Band band) {
		// TODO Auto-generated method stub
		if (getBandById(band.getId()) != null)
			bandDao.delete(band);
		
	}

	
}