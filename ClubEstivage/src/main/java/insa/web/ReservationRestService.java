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
import insa.entities.Client;
import insa.entities.Hebergement;
import insa.entities.Reservation;


@RestController
@CrossOrigin("*")
public class ReservationRestService {

	@Autowired
	private  ReservationRepository  reservationRepository ;

	@RequestMapping(value="/reservations",method=RequestMethod.GET)
	public List<Reservation> getReservations(){
		return reservationRepository.findAll();
		
	}
	
	
	@RequestMapping(value="/reservation/{id}",method=RequestMethod.GET)
	public Reservation getReservation(@PathVariable Long id){
		return reservationRepository.findOne(id);
		
	}
	
	@RequestMapping(value="/getHebergementbyReservation/{id}",method=RequestMethod.GET)
	public Reservation getHebergementByReservation(@PathVariable Long id){
		return reservationRepository.findOne(id);
		
	}
	
	@RequestMapping(value="/reservation/{id}",method=RequestMethod.PUT)
	public Reservation editReservation(@PathVariable Long id,@RequestBody Reservation c){
		c.setIdReservation(id);
		return reservationRepository.save(c);
		
	}
	
	@RequestMapping(value="/chercherReservations",method=RequestMethod.GET)
	public Page<Reservation> chercher(
			@RequestParam (name="mc", defaultValue="") String mc,
			@RequestParam (name="page", defaultValue="0") int page,
			@RequestParam (name="size", defaultValue="5") int size
			){
		return  reservationRepository.chercher("%"+mc+"%", new PageRequest(page, size));
		
	}
	
	@RequestMapping(value="/reservations",method=RequestMethod.POST)
	public Reservation save(@RequestBody Reservation c){
		return reservationRepository.save(c);
		
	}
	
	@RequestMapping(value="/reservation/{id}",method=RequestMethod.DELETE)
	public boolean supprimer(@PathVariable Long id){
		reservationRepository.delete(id);
	    return true;
		 
	}
	
	@RequestMapping(value="/chercherReservationsParSemaine",method=RequestMethod.GET)
	public Page<Reservation> chercherReservationParSemaine(
			@RequestParam (name="id", defaultValue="1000")Long id,
			@RequestParam (name="page", defaultValue="0") int page,
			@RequestParam (name="size", defaultValue="5") int size
			){
		return  reservationRepository.chercherReservationParSemaine(id, new PageRequest(page, size));
		
	}
	

	
	
	
}
