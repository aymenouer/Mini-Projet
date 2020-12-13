package tn.esprit.spring.service;

import java.util.*;

import tn.esprit.spring.entity.Event;
import tn.esprit.spring.entity.User;

public interface EventService {
	 public Event ajouterEvent(Event event);
	 public List<Event> getAllEvents();
	 public Event getEventID(String ID);
	 public Boolean DeleteEvent(String ID);
	 public Boolean Valider_Event(String ID);
	 public Boolean testparticipation_user_Event(String ID_Event,String ID_User);
	 public Boolean deleteparticipation_user_Event(String ID_Event,String ID_User);
	 public Boolean AddUser_to_event(String ID_Event,String ID_User);
	 public List<String> getAllUsersNamesJPQL();
	 public Set<User> getAllUsersParticipe(String ID_Event);
	 
}
