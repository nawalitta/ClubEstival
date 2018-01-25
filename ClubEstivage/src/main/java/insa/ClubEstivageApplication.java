package insa;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import insa.dao.ClientRepository ;
import insa.dao.HebergementRepository;
import insa.entities.Client;
import insa.entities.Hebergement; 
import insa.dao.RoleRepository;
import insa.entities.Client;
import insa.entities.Role; 

@SpringBootApplication
public class ClubEstivageApplication implements CommandLineRunner {

	@Autowired
	private ClientRepository  clientRepository ;
	@Autowired
	private HebergementRepository hebergementRepository;
	private RoleRepository  roleRepository ;
	
	
	public static void main(String[] args) {
		SpringApplication.run(ClubEstivageApplication.class, args);
	}

	@Override
	public void run(String... arg0) throws Exception {
	
		clientRepository.save(new Client ( "nomClient1",  "adresse", " email", "tel"));
		clientRepository.save(new Client ( "nomClient2",  "adresse", " email", "tel"));
		clientRepository.save(new Client ( "nomClient3",  "adresse", " email", "tel"));
		clientRepository.save(new Client ( "nomClient4",  "adresse", " email", "tel"));
		clientRepository.findAll().forEach(c->{
			System.out.println(c.getNomClient());

		});
		

		
	hebergementRepository.save(new Hebergement("typeHebergement","nomHebergement","description","emplacement","disponible","fff", 2000));
		
	hebergementRepository.save(new Hebergement("typeHebergement","nomHebergement","description","emplacement","disponible","fff", 3000));
		hebergementRepository.findAll().forEach(h->{
			System.out.println(h.getNomHebergement());

		}); 
		
	/*	roleRepository.save(new Role ( "admin"));
		roleRepository.save(new Role ( "client"));
		roleRepository.findAll().forEach(r->{
			System.out.println(r.getNomRole());

		});*/
		

	}
}
