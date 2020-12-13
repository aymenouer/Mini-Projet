package tn.esprit.spring.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import tn.esprit.spring.entity.*;

public interface EventRepository extends MongoRepository<Event, String> {

}
