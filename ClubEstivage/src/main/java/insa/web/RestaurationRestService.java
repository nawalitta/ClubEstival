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

import insa.dao.RestaurationRepository;
import insa.entities.Reservation;
import insa.entities.Restauration;

@RestController
@CrossOrigin("*")
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
	
	@RequestMapping(value="/restauration/{id}",method=RequestMethod.DELETE)
	public boolean  supprimer(@PathVariable Long id){
		// à accomplir 
		restaurationRepository.delete(id);
	    return true;
		
	}
	
	@RequestMapping(value="/chercherRestaurations",method=RequestMethod.GET)
	public Page<Restauration> chercher(
			@RequestParam (name="mc", defaultValue="") String mc,
			@RequestParam (name="page", defaultValue="0") int page,
			@RequestParam (name="size", defaultValue="5") int size
			){
		return  restaurationRepository.chercher("%"+mc+"%", new PageRequest(page, size));
		
	}
	
	@RequestMapping(value="/restauration/{id}",method=RequestMethod.PUT)
	public Restauration editRestauration(@PathVariable Long id,@RequestBody Restauration c){
		//c.setIdRestauration(id);
		return restaurationRepository.save(c);
		
	}
	
	
	
	
}
