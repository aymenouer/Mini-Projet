package tn.esprit.spring.entity;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.format.annotation.DateTimeFormat;
@Document(collection = "stories")
public class Storie {
	@Id
	private String id;
	private String nom_image ;
	@DBRef
	private User users = new User();

	public Storie() {
		// TODO Auto-generated constructor stub
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getNom_image() {
		return nom_image;
	}
	public void setNom_image(String nom_image) {
		this.nom_image = nom_image;
	}
	public User getUsers() {
		return users;
	}
	public void setUsers(User users) {
		this.users = users;
	}
	public Storie(String id, String nom_image) {
		super();
		this.id = id;
		this.nom_image = nom_image;
	}
	public Storie(String nom_image) {
		super();
		this.nom_image = nom_image;
	}
	
}
