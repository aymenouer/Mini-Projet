package tn.esprit.spring.entity;

import java.util.HashSet;
import java.util.Set;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "categories")
public class Categorie {
	@Id
	private String id;

	private Categorie_type Type;
	@DBRef
	private Set<Event> events = new HashSet<>();
	
	public Categorie() {


	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public Categorie_type getType() {
		return Type;
	}
	public void setType(Categorie_type type) {
		Type = type;
	}
	public Categorie(Categorie_type type) {

		Type = type;
	}
	public Set<Event> getEvents() {
		return events;
	}
	public void setEvents(Set<Event> events) {
		this.events = events;
	}
	@Override
	public String toString() {
		return "Categorie [id=" + id + ", Type=" + Type + "]";
	}
	
}
