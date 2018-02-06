package insa.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import insa.dao.ClientRepository;
import insa.dao.VersementRepository;
import insa.entities.Client;
import insa.entities.Versement;

@RestController
@CrossOrigin("*")
public class VersementRestService {

	@Autowired
	private VersementRepository  versementRepository ;

	@RequestMapping(value="/versements",method=RequestMethod.GET)
	public List<Versement> getVersement(){
		return versementRepository.findAll();
		
	}
	
	
	@RequestMapping(value="/versement/{id}",method=RequestMethod.GET)
	public Versement getVersement(@PathVariable Long id){
		return versementRepository.findOne(id);
		
	}
	
	
	
	
}
