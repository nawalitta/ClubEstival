package insa;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import insa.dao.ClientRepository ;
import insa.entities.Client; 

@SpringBootApplication
public class ClubEstivageApplication implements CommandLineRunner {

	@Autowired
	private ClientRepository  clientRepository ;
	
	
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
		

	}
}
