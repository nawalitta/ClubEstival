package insa.dao;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import insa.entities.Client;

public interface ClientRepository extends JpaRepository<Client,Long>  {
	
	
	@Query("select c from Client c where c.nomClient like:x")
	public Page<Client> chercher(@Param("x")String mc, Pageable pageable);

	
	
	
}



