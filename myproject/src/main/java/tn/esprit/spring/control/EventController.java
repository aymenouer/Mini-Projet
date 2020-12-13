package tn.esprit.spring.control;

import java.util.List;
import java.util.Set;


import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import tn.esprit.spring.entity.Event;
import tn.esprit.spring.entity.User;
import tn.esprit.spring.service.EventServiceImpl;


@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/Event")
public class EventController {
	@Autowired
	EventServiceImpl eventService;
	@PostMapping("")
	@PreAuthorize(" hasRole('MODERATOR') or hasRole('ADMIN')")
	public Event add_event(@Valid @RequestBody Event event) {

	return eventService.ajouterEvent(event);
	}
	
	@PostMapping("/comment")

	public Event add_comment_to_event(@Valid @RequestBody Event event) {

	return eventService.ajouterEvent(event);
	}
	
	
	@GetMapping("/participer/{User-id}/{Event-id}")
	public Boolean participer(@PathVariable("User-id") String ID_User,@PathVariable("Event-id") String ID_Event) {

	return eventService.AddUser_to_event(ID_Event, ID_User);
	}
	
	
	@GetMapping("/{User-id}/{Event-id}")
	public Boolean testparticipation_user_Event(@PathVariable("User-id") String ID_User,@PathVariable("Event-id") String ID_Event) {

	return eventService.testparticipation_user_Event(ID_Event, ID_User);
	}
	@GetMapping("")
	
	public List<Event> all_event() {

	return eventService.getAllEvents();
	}
	
	@GetMapping("/{Event-id}")
	public Event get_event(@PathVariable("Event-id") String ID_Event) {
	return eventService.getEventID(ID_Event);
	}
	@GetMapping("/users/{Event-id}")
	@PreAuthorize(" hasRole('MODERATOR') or hasRole('ADMIN')")
	public Set<User> get_event_participents(@PathVariable("Event-id") String ID_Event) {
	return eventService.getAllUsersParticipe(ID_Event);
	}

	@DeleteMapping("/{Event-id}")
	@PreAuthorize(" hasRole('MODERATOR') or hasRole('ADMIN')")
	public Boolean Delete_event(@PathVariable("Event-id") String ID_Event) {
	return eventService.DeleteEvent(ID_Event);
	}
	@PutMapping("/valide/{Event-id}")
	@PreAuthorize(" hasRole('ADMIN')")
	public Boolean Valide_event(@PathVariable("Event-id") String ID_Event) {

	return eventService.Valider_Event(ID_Event);
	}
	@DeleteMapping("/delete/{User-id}/{Event-id}")
	public Boolean deleteparticipation_user_Event(@PathVariable("User-id") String ID_User,@PathVariable("Event-id") String ID_Event) {

	return eventService.deleteparticipation_user_Event(ID_Event, ID_User);
	}
	
	
}
