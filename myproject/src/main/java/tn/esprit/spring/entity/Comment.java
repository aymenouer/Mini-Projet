package tn.esprit.spring.entity;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
@Document(collection = "Comments")
public class Comment {
	@Id
	private String id;
	@NotBlank

	private String Contenu;
	@DBRef
	private User users = new User();

	public Comment() {
		// TODO Auto-generated constructor stub
	}
	public Comment(String id, @NotBlank @Size(max = 20) String contenu) {
		super();
		this.id = id;
		Contenu = contenu;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getContenu() {
		return Contenu;
	}
	public void setContenu(String contenu) {
		Contenu = contenu;
	}
	public User getUsers() {
		return users;
	}
	public void setUsers(User users) {
		this.users = users;
	}
	
	
}
