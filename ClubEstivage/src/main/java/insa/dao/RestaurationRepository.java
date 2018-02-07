package insa.dao;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import insa.entities.Restauration;

public interface RestaurationRepository extends JpaRepository<Restauration,Long>  {
	
	@Query("select r from Restauration r where r.nomRestauration like:x")
	public Page<Restauration> chercher(@Param("x")String mc, Pageable pageable);
	
	
}
