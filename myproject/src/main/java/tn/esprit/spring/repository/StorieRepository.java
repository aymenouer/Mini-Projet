package tn.esprit.spring.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import tn.esprit.spring.entity.Storie;

public interface StorieRepository extends MongoRepository<Storie, String> {

}
