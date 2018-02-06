package insa.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import insa.dao.UserRepository;
import insa.entities.Client;
import insa.entities.Reservation;
import insa.entities.User;

@RestController
@CrossOrigin("*")
public class UserRestService {

	@Autowired
	private UserRepository  userRepository ;

	@RequestMapping(value="/users",method=RequestMethod.GET)
	public List<User> getUsers(){
		return userRepository.findAll();
		
	}
	

	@RequestMapping(value="/usersNonActive",method=RequestMethod.GET)
	public List<User> getUsersNonActive(){
		return userRepository.UserNonActive(false);
		
	}
	
	@RequestMapping(value="/users/{id}",method=RequestMethod.GET)
	public User getUser(@PathVariable Long id){
		return userRepository.findOne(id);
		
	}
	
	/*@RequestMapping(value="/u/{id}",method=RequestMethod.PUT)
	public Reservation editReservation(@PathVariable Long id,@RequestBody Reservation c){
		c.setIdReservation(id);
		return reservationRepository.save(c);
		
	}*/
	
	/*@RequestMapping(value="/users/{id}",method=RequestMethod.PUT)
	public boolean activate(@PathVariable Long id,@RequestBody User u) {
		userRepository.activate(true,id) ;
		userRepository.save(u);
		return true;		
		
	}*/
	
	@RequestMapping(value="/users/{id}",method=RequestMethod.PUT)
	public User activate(@PathVariable Long id,@RequestBody User u) {
			
		//u.setIdUser(id);
		
		return userRepository.save(u);
		}
		
	



	@RequestMapping(value="/users",method=RequestMethod.POST)
	public User save(@RequestBody User u){
		return userRepository.save(u);
		
	}
	@RequestMapping(value="/users/{id}",method=RequestMethod.DELETE)
	public boolean  supprimer(@PathVariable Long id){
		userRepository.delete(id);
	    return true;
		 
	}
	
	
	
	
}
