package tn.esprit.spring.service;

import java.util.List;

import tn.esprit.spring.entity.Categorie;;

public interface CategorieService {
	 public Categorie ajouterCategorie(Categorie Categorie);
	 public Categorie recupererCategorie(String nom_Categorie);
	 public List<Categorie> getAllCategories();
	 public void ajouterEvent_a_Categorie(String id_Event,String id_Categorie);
}
