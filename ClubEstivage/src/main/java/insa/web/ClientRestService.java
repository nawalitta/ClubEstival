package insa.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import insa.dao.ClientRepository;
import insa.entities.Client;

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
	
	
	
	
}
