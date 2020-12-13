package tn.esprit.spring.repository;

import java.util.Optional;


import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import tn.esprit.spring.entity.User;
public interface  UserRepository  extends MongoRepository<User, String> {
	  Optional<User> findByUsername(String username);
	  
		
	  Boolean existsByUsername(String username);

	  Boolean existsByEmail(String email);
}
