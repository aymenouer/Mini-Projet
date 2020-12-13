package tn.esprit.spring.entity;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "events")
public class Event {
	@Id
	private String id;
	@NotBlank
	@Size(max = 20)
	private String Titre;
	@DBRef
	private Categorie categorie ;
	private String nom_image ;

	private Boolean isValide=false;
	@Temporal(TemporalType.DATE)
	private Date Date_Debut;
	@Temporal(TemporalType.DATE)
	private Date Date_Fin;
	@DBRef
	private Set<User> users = new HashSet<>();
	@DBRef
	private Set<Comment> Comments = new HashSet<>();
	@DBRef
	private Set<Storie> stories = new HashSet<>();
	public Event() {
		// TODO Auto-generated constructor stub
	}
	
	public Set<Storie> getStories() {
		return stories;
	}

	public void setStories(Set<Storie> stories) {
		this.stories = stories;
	}

	public Event(Boolean isValide,String id, @NotBlank @Size(max = 20) String titre, Date date_Debut, Date date_Fin) {
		super();
		this.id = id;
		Titre = titre;
		Date_Debut = date_Debut;
		Date_Fin = date_Fin;
		this.isValide =isValide;
	}

	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getTitre() {
		return Titre;
	}
	public void setTitre(String titre) {
		Titre = titre;
	}
	public Date getDate_Debut() {
		return Date_Debut;
	}
	public void setDate_Debut(Date date_Debut) {
		Date_Debut = date_Debut;
	}
	public Date getDate_Fin() {
		return Date_Fin;
	}
	public void setDate_Fin(Date date_Fin) {
		Date_Fin = date_Fin;
	}
	public Set<User> getUsers() {
		return users;
	}
	public void setUsers(Set<User> users) {
		this.users = users;
	}

	public Boolean getIsValide() {
		return isValide;
	}

	public void setIsValide(Boolean isValide) {
		this.isValide = isValide;
	}

	

	public Set<Comment> getComments() {
		return Comments;
	}

	public void setComments(Set<Comment> comments) {
		Comments = comments;
	}

	public Categorie getCategorie() {
		return categorie;
	}

	public void setCategorie(Categorie categories) {
		this.categorie = categories;
	}

	public String getNom_image() {
		return nom_image;
	}

	public void setNom_image(String nom_image) {
		this.nom_image = nom_image;
	}

	
	
}
