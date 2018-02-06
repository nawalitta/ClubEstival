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
import insa.dao.ReservationRepository;
import insa.entities.Hebergement;
import insa.entities.Reservation;
import insa.entities.Semaine;


@RestController
@CrossOrigin("*")
public class HebergementRestService {

	@Autowired
	private HebergementRepository  hebergementRepository ;
	
	@Autowired
	private ReservationRepository  reservationRepository ;

	@RequestMapping(value="/hebergements",method=RequestMethod.GET)
	public List<Hebergement> getHebergements(){
		return hebergementRepository.findAll();
		
	}
	
	@RequestMapping(value="/hebergement/{id}",method=RequestMethod.GET)
	public Hebergement getHebergement(@PathVariable int id){
		return hebergementRepository.findOne((long) id);
		
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
	
	
		
	
	
	@RequestMapping(value="/DisponibiliteHebergement",method=RequestMethod.GET)
	public Page<Semaine>  troverClientParTypeHebergement(
			@RequestParam (name="idHebergement", defaultValue="2000") Long idHebergement,
			@RequestParam (name="page", defaultValue="0") int page,
			@RequestParam (name="size", defaultValue="5") int size
			){
		//System.out.println(clientRepository.trouverParTypeHebergement("%"+typeHebergement+"%" ,new PageRequest(page, size)));
		 return hebergementRepository.trouverDisponibiliteParTypeHebergement(idHebergement,new PageRequest(page, size));
	   
		 
	}
	
	@RequestMapping(value="/hebergement/{id}",method=RequestMethod.PUT)
	public Hebergement editHebergement(@PathVariable Long id,@RequestBody Hebergement c){
		c.setIdHebergement(id);
		return hebergementRepository.save(c);
		
	}
	
	@RequestMapping(value="/hebergement/{id}",method=RequestMethod.DELETE)
	public boolean supprimer(@PathVariable Long id){
		Reservation res=reservationRepository.trouverReservationByHebergement(id);
		if( res != null ) {
				//System.out.println(res.getIdReservation());
				reservationRepository.delete(res.getIdReservation());
		}
		hebergementRepository.delete(id);
	    return true;
		 
	}
	
	
	
	
}
