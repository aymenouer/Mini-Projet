package tn.esprit.spring.control;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import tn.esprit.spring.entity.Comment;
import tn.esprit.spring.entity.Event;
import tn.esprit.spring.service.CommentServiceImpl;
import tn.esprit.spring.service.EventServiceImpl;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/Comment")
public class CommentController {
	@Autowired
	CommentServiceImpl commentService;
	
	
	@PostMapping("/{Event-id}")
	public Comment add_comment(@Valid @RequestBody Comment comment,@PathVariable("Event-id") String id_event) {

	return commentService.add_comment(comment, id_event);
	}
	@GetMapping("/{Event-id}")
	
	public List<Comment> List_Comment_Event(@PathVariable("Event-id") String id_event) {

	return commentService.List_Comment_Event(id_event);
	}
}
