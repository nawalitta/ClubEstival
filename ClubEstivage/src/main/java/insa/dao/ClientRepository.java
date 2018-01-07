package insa.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import insa.entities.Client;

public interface ClientRepository extends JpaRepository<Client,Long>  {

	
	
}
