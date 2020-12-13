package tn.esprit.spring.control;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import tn.esprit.spring.entity.Storie;
import tn.esprit.spring.service.StorieServiceImpl;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/Storie")
public class StorieController {
	@Autowired
	StorieServiceImpl StorieService;
	
	
	@PostMapping("/{Event-id}")
	public Storie add_Storie(@Valid @RequestBody Storie storie,@PathVariable("Event-id") String id_event) {


	 StorieService.add_Storie(storie, id_event);

return null;
	}
	@GetMapping("/{Event-id}")
	public List<Storie> List_Storie_Event(@PathVariable("Event-id") String id_event) {

	return StorieService.List_Storie_Event(id_event);
	}
}
