package insa.dao;

import java.util.List;

import javax.persistence.Query;

import org.springframework.data.jpa.repository.JpaRepository;

import insa.entities.Semaine;

public interface SemaineRepository extends JpaRepository<Semaine,Long>  {

	
	
	
}
