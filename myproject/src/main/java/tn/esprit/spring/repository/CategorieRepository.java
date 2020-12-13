package tn.esprit.spring.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import tn.esprit.spring.entity.Categorie;

public interface CategorieRepository extends MongoRepository<Categorie, String>  {

}
