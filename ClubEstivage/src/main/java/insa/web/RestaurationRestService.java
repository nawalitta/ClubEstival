package insa.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import insa.dao.RestaurationRepository;
import insa.entities.Restauration;

@RestController
public class RestaurationRestService {

	@Autowired
	private RestaurationRepository  restaurationRepository ;

	@RequestMapping(value="/restaurations",method=RequestMethod.GET)
	public List<Restauration> getRestaurations(){
		return restaurationRepository.findAll();
		
	}
	
	
	@RequestMapping(value="/restaurations/{id}",method=RequestMethod.GET)
	public Restauration getRestauration(@PathVariable Long id){
		return restaurationRepository.findOne(id);
		
	}
	
	@RequestMapping(value="/restaurations",method=RequestMethod.POST)
	public Restauration save(@RequestBody Restauration r){
		return restaurationRepository.save(r);
		
	}
	
	@RequestMapping(value="/restaurations/{id}",method=RequestMethod.DELETE)
	public boolean  supprimer(@PathVariable Long id){
		restaurationRepository.delete(id);
	    return true;
		
	}
	
	
	
	
}
