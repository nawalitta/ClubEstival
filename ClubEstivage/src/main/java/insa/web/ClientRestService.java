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

import insa.dao.ClientRepository;
import insa.entities.Client;
import insa.entities.User;

@RestController
@CrossOrigin("*")
public class ClientRestService {

	@Autowired
	private ClientRepository  clientRepository ;

	@RequestMapping(value="/clients",method=RequestMethod.GET)
	public List<Client> getClients(){
		return clientRepository.findAll();
		
	}
	
	
	@RequestMapping(value="/clients/{id}",method=RequestMethod.GET)
	public Client getClient(@PathVariable Long id){
		return clientRepository.findOne(id);
		
	}
	
	@RequestMapping(value="/chercherClients",method=RequestMethod.GET)
	public Page<Client> chercher(
			@RequestParam (name="mc", defaultValue="") String mc,
			@RequestParam (name="page", defaultValue="0") int page,
			@RequestParam (name="size", defaultValue="5") int size
			){
		return clientRepository.chercher("%"+mc+"%", new PageRequest(page, size));
		
	}
	
	@RequestMapping(value="/clients",method=RequestMethod.POST)
	public Client save(@RequestBody Client c){
		return clientRepository.save(c);
		
	}
	@RequestMapping(value="/clients/{id}",method=RequestMethod.DELETE)
	public boolean  supprimer(@PathVariable Long id){
		clientRepository.delete(id);
	    return true;
		 
	}
	
	
	
	
}
