package insa.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import insa.dao.RoleRepository;
import insa.entities.Role;

@RestController
@CrossOrigin("*")
public class RoleRestService {

	@Autowired
	private RoleRepository  roleRepository ;

	@RequestMapping(value="/roles",method=RequestMethod.GET)
	public List<Role> getRoles(){
		return roleRepository.findAll();
		
	}
	
	@RequestMapping(value="/roles/{id}",method=RequestMethod.GET)
	public Role getRole(@PathVariable Long id){
		return roleRepository.findOne(id);
		
	}
	
	@RequestMapping(value="/roles",method=RequestMethod.POST)
	public Role save(@RequestBody Role r){
		return roleRepository.save(r);
		
	}
	
	@RequestMapping(value="/roles/{id}",method=RequestMethod.DELETE)
	public boolean  supprimer(@PathVariable Long id){
		roleRepository.delete(id);
	    return true;
		
	}
	
	
	
	
}
