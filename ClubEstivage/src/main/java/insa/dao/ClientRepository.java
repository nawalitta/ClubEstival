package insa.dao;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import insa.entities.Client;

public interface ClientRepository extends JpaRepository<Client,Long>  {
	
	
	@Query("select c from Client c where c.nomClient like:x")
	public Page<Client> chercher(@Param("x")String mc, Pageable pageable);
	
	/*@Query("select c from Client c "
			+ "  where c.reservations.hebergement.typeHebergement like:x")
	public Page<Client> trouverParTypeHebergement(@Param("x")String typeHebergement, Pageable pageable);*/
		
	@Query("select c from Client c , Reservation res"
			+ " where c.idClient = res.client.idClient and  res.hebergement.typeHebergement like:x")
	public Page<Client> trouverParTypeHebergement(@Param("x")String typeHebergement, Pageable pageable);
	
	
	
	@Query("select c from Client c , Reservation res"
			+ " where c.idClient = res.client.idClient and  res.restauration.typeRestauration like:x")
	public Page<Client> trouverClientParTypeRestauration(@Param("x")String typeRestauration, Pageable pageable);
	
	
	
	
	
	
	
	
	
}



