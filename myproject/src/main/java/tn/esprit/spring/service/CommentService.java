package tn.esprit.spring.service;

import java.util.List;

import tn.esprit.spring.entity.Comment;

public interface CommentService {

	public Comment add_comment(Comment comment, String id_event);
	public List<Comment> List_Comment_Event(String id_Event);
	
	
}
