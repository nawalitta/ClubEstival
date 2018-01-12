package insa.web;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import insa.dao.HebergementRepository;
import insa.entities.Hebergement;


@RestController
public class HebergementRestService {

	@Autowired
	private HebergementRepository  hebergementRepository ;

	@RequestMapping(value="/hebergements",method=RequestMethod.GET)
	public List<Hebergement> getHebergements(){
		return hebergementRepository.findAll();
		
	}
	
	
	@RequestMapping(value="/hebergement/{id}",method=RequestMethod.GET)
	public Hebergement getHebergement(@PathVariable Long id){
		return hebergementRepository.findOne(id);
		
	}
	
	
	
	
}
