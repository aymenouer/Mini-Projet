package tn.esprit.spring.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Rates")
public class Rate {
	@Id
	private String id;
	
	private String Valeur;
	@DBRef
	private User users = new User();
	@DBRef
	private Event events = new Event();
	public Rate() {
		// TODO Auto-generated constructor stub
	}
	public Rate(String id, String valeur) {
		super();
		this.id = id;
		Valeur = valeur;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getValeur() {
		return Valeur;
	}
	public void setValeur(String valeur) {
		Valeur = valeur;
	}
	public User getUsers() {
		return users;
	}
	public void setUsers(User users) {
		this.users = users;
	}
	public Event getEvents() {
		return events;
	}
	public void setEvents(Event events) {
		this.events = events;
	}
	
}
