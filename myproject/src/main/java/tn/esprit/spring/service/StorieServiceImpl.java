package tn.esprit.spring.service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import tn.esprit.spring.entity.Comment;
import tn.esprit.spring.entity.Event;
import tn.esprit.spring.entity.Storie;
import tn.esprit.spring.repository.CommentRepository;
import tn.esprit.spring.repository.EventRepository;
import tn.esprit.spring.repository.StorieRepository;
@Service
public class StorieServiceImpl implements StorieService {
	@Autowired
	StorieRepository storieRepository;
	@Autowired
	EventRepository eventRepository;
	@Override
	public Storie add_Storie(Storie storie, String id_event) {
	
		storieRepository.save(storie);
	
		Event event = eventRepository.findById(id_event).get();
		
		ArrayList<Storie> Stories = new ArrayList<>(event.getStories());
		

		Stories.add(storie);
		
			 
		
		event.setStories(new HashSet<Storie>(Stories));
		  eventRepository.save(event);
			
		return storie;
	}

	@Override
	public List<Storie> List_Storie_Event(String id_Event) {
		Event event = eventRepository.findById(id_Event).get();
		ArrayList<Storie> Stories = new ArrayList<>(event.getStories());
		
		
		return Stories;
	}

}
