package tn.esprit.spring.service;

import java.util.List;

import tn.esprit.spring.entity.Storie;

public interface StorieService {
	public Storie add_Storie(Storie storie, String id_event);
	public List<Storie> List_Storie_Event(String id_Event);
	
}
