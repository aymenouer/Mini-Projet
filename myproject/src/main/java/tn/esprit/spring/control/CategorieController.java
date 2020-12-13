package tn.esprit.spring.control;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import tn.esprit.spring.entity.Categorie;
import tn.esprit.spring.service.CategorieSeriveImpl;;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/Categorie")
public class CategorieController {
	@Autowired
	CategorieSeriveImpl categorieserive;
	@PostMapping("")
	public Categorie ajouterCategorie(@Valid @RequestBody Categorie Categorie) {
		categorieserive.ajouterCategorie(Categorie);
		return Categorie;
	}
	@GetMapping("")
	public List<Categorie> getAllCategories() {
		return categorieserive.getAllCategories();
	}
	@PutMapping("/{Categorie-id}/{Event-id}")
	@PreAuthorize(" hasRole('MODERATOR') or hasRole('ADMIN')")
	public void ajouter_event_a_categorie(@PathVariable("Categorie-id") String ID_Categorie,@PathVariable("Event-id") String ID_Event) {

	 categorieserive.ajouterEvent_a_Categorie(ID_Event, ID_Categorie);
	}
	@GetMapping("/name/{Categorie-name}")
	public Categorie recupererCategorie(@PathVariable("Categorie-name") String nom_Categorie) {
		
		return categorieserive.recupererCategorie(nom_Categorie);
	}
	
}
