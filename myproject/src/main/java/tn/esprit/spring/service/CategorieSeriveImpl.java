package tn.esprit.spring.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import tn.esprit.spring.entity.Categorie;
import tn.esprit.spring.entity.Event;
import tn.esprit.spring.entity.User;
import tn.esprit.spring.repository.CategorieRepository;
import tn.esprit.spring.repository.EventRepository;

@Service
public class CategorieSeriveImpl implements CategorieService {
	@Autowired
	EventRepository eventRepository;
	@Autowired
	CategorieRepository categorieRepository;
	public Categorie ajouterCategorie(Categorie Categorie) {
		categorieRepository.save(Categorie);
		return Categorie;
	}

	@Override
	public List<Categorie> getAllCategories() {
		return categorieRepository.findAll();
	}

	@Override
	public void ajouterEvent_a_Categorie(String id_Event, String id_Categorie) {
		
		Event event = eventRepository.findById(id_Event).get();
		Categorie cat = categorieRepository.findById(id_Categorie).get();
		Set<Event> Events = cat.getEvents();
		Events.add(event);
		cat.setEvents(Events);
		categorieRepository.save(cat);
	
	}

	@Override
	public Categorie recupererCategorie(String nom_Categorie) {

		ArrayList<Categorie> categs = new ArrayList<>(categorieRepository.findAll());
		
		
		
		
		
		return  categs.stream().filter(cat -> cat.getType().name().equals(nom_Categorie)).findFirst().get();
		
	}

}
