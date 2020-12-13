package tn.esprit.spring.service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import tn.esprit.spring.entity.Comment;
import tn.esprit.spring.entity.Event;
import tn.esprit.spring.entity.User;
import tn.esprit.spring.repository.CommentRepository;
import tn.esprit.spring.repository.EventRepository;

@Service
public class CommentServiceImpl implements CommentService {
	@Autowired
	CommentRepository commentRepository;
	@Autowired
	EventRepository eventRepository;
	@Override
	public Comment add_comment(Comment comment, String id_event) {
		commentRepository.save(comment);
		Event event = eventRepository.findById(id_event).get();
		
		ArrayList<Comment> comments = new ArrayList<>(event.getComments());
		

		comments.add(comment);
		
			 
		
		event.setComments(new HashSet<Comment>(comments));
		  eventRepository.save(event);
			
		return comment;
	}

	@Override
	public List<Comment> List_Comment_Event(String id_Event) {
		Event event = eventRepository.findById(id_Event).get();
		ArrayList<Comment> comments = new ArrayList<>(event.getComments());
		
		
		return comments;
	}

}
