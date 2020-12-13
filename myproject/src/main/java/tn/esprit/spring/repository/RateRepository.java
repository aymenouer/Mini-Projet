package tn.esprit.spring.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import tn.esprit.spring.entity.*;

public interface RateRepository extends MongoRepository<Rate, String> {

}
