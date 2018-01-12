package insa.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import insa.dao.UserRepository;
import insa.entities.Client;
import insa.entities.Role;
import insa.entities.User;

@RestController
public class UserRestService {

	@Autowired
	private UserRepository  userRepository ;

	@RequestMapping(value="/users",method=RequestMethod.GET)
	public List<User> getUsers(){
		return userRepository.findAll();
		
	}
	
	
	@RequestMapping(value="/users/{id}",method=RequestMethod.GET)
	public User getUser(@PathVariable Long id){
		return userRepository.findOne(id);
		
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
