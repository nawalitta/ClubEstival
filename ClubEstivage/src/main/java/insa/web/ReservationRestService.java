package insa.web;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import insa.dao.HebergementRepository;
import insa.dao.ReservationRepository;
import insa.entities.Hebergement;
import insa.entities.Reservation;


@RestController
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
	
	
	
	
}
