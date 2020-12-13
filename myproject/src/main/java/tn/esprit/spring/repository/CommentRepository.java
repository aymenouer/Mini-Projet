package tn.esprit.spring.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import tn.esprit.spring.entity.Comment;


public interface CommentRepository extends MongoRepository<Comment, String> {

}
