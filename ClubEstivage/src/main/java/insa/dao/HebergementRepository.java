package insa.dao;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import insa.entities.Hebergement;


public interface HebergementRepository extends JpaRepository<Hebergement,Long>  {
	@Query("select r from Hebergement r where r.nomHebergement like:x")
	public Page<Hebergement> chercher(@Param("x")String mc, Pageable pageable);
	
	
	
	
} 