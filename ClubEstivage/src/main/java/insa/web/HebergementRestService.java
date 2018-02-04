package insa.web;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import insa.dao.HebergementRepository;
import insa.entities.Hebergement;
import insa.entities.Reservation;


@RestController
@CrossOrigin("*")
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
	
	@RequestMapping(value="/chercherHebergements",method=RequestMethod.GET)
	public Page<Hebergement> chercher(
			@RequestParam (name="mc", defaultValue="") String mc,
			@RequestParam (name="page", defaultValue="0") int page,
			@RequestParam (name="size", defaultValue="5") int size
			){
		return  hebergementRepository.chercher("%"+mc+"%", new PageRequest(page, size));
		
	}
	
	@RequestMapping(value="/hebergements",method=RequestMethod.POST)
	public Hebergement save(@RequestBody Hebergement c){
		return hebergementRepository.save(c);
		
	}
	
	
	
	
	
}
