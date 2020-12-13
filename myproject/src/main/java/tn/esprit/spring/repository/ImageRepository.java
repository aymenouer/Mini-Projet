package tn.esprit.spring.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import tn.esprit.spring.entity.Image;

public interface ImageRepository extends MongoRepository<Image, String> {
	Optional<Image> findByName(String name);
}
