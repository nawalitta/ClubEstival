package insa.dao;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import insa.entities.Client;
import insa.entities.Hebergement;
import insa.entities.Semaine;


public interface HebergementRepository extends JpaRepository<Hebergement,Long>  {
	@Query("select r from Hebergement r where r.nomHebergement like:x")
	public Page<Hebergement> chercher(@Param("x")String mc, Pageable pageable);
	
	@Query("select c from Client c , Reservation res"
			+ " where c.idClient = res.client.idClient and  res.hebergement.typeHebergement like:x")
	public Page<Client> trouverParTypeHebergement(@Param("x")String typeHebergement, Pageable pageable);
	
	@Query("select s from Semaine s , Reservation res"
			+ " where s.idSemaine != res.semaine.idSemaine and  res.hebergement.idHebergement=:x")
	public Page<Semaine> trouverDisponibiliteParTypeHebergement(@Param("x")Long idHebergement, Pageable pageable);
	
	
	
	
	
	
} 