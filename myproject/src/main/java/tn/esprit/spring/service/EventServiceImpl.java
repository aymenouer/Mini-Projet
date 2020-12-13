package tn.esprit.spring.service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import tn.esprit.spring.entity.Event;
import tn.esprit.spring.entity.User;
import tn.esprit.spring.repository.EventRepository;
import tn.esprit.spring.repository.UserRepository;

@Service
public class EventServiceImpl implements EventService {
	@Autowired
	EventRepository eventRepository;
	@Autowired
	UserRepository userRepository;
	@Override
	public Event ajouterEvent(Event event) {
		eventRepository.save(event);
		return event;
	}

	@Override
	public List<Event> getAllEvents() {
		// TODO Auto-generated method stub
		return eventRepository.findAll();
	}

	@Override
	public Event getEventID(String ID) {
		Event event = eventRepository.findById(ID).get();
		return event;
	}

	@Override
	public Boolean DeleteEvent(String ID) {
		Event event = eventRepository.findById(ID).get();
		 eventRepository.delete(event);
		return true;
	}

	@Override
	public Boolean Valider_Event(String ID) {
		Event event = eventRepository.findById(ID).get();
		event.setIsValide(true);
		eventRepository.save(event);
		return true;
	}

	@Override
	public List<String> getAllUsersNamesJPQL() {
		
		return null;
	}

	@Override
	public Set<User> getAllUsersParticipe(String ID_Event) {
		Event event = eventRepository.findById(ID_Event).get();
		
		 Set<User> users = event.getUsers();
		return users;
	}

	@Override
	public Boolean AddUser_to_event(String ID_Event, String ID_User) {
		Event event = eventRepository.findById(ID_Event).get();
		User user = userRepository.findById(ID_User).get();
		
		ArrayList<User> users = new ArrayList<>(event.getUsers());
		

		  users.add(user);
		
			 
			 event.setUsers(new HashSet<User>(users));
		  eventRepository.save(event);
	
		return true;
	}

	@Override
	public Boolean testparticipation_user_Event(String ID_Event, String ID_User) {
		Event event = eventRepository.findById(ID_Event).get();
		User user = userRepository.findById(ID_User).get();
		 Set<User> users = event.getUsers();
		
		 for (User user2 : users) {
			 
			 if (user2.equals(user))
			 {
				 
				 return  true;
			 }
			
		}
		return  false;
	}

	@Override
	public Boolean deleteparticipation_user_Event(String ID_Event, String ID_User) {
		Event event = eventRepository.findById(ID_Event).get();
		User user = userRepository.findById(ID_User).get();
		
		ArrayList<User> users = new ArrayList<>(event.getUsers());

		  users.remove(user);
	
			 event.setUsers(new HashSet<User>(users));
		  eventRepository.save(event);
		  return true;
	}

}
