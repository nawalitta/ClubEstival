

package insa.dao;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import insa.entities.Hebergement;
import insa.entities.Reservation;
import insa.entities.Client;

public interface ReservationRepository extends JpaRepository<Reservation,Long>  {
	@Query("select r from Reservation r where r.nomReservation like:x")
	public Page<Reservation> chercher(@Param("x")String mc, Pageable pageable);
	
	
	@Query("select r from Reservation r where r.semaine.idSemaine=:x")
	public Page<Reservation> chercherReservationParSemaine(@Param("x")Long id, Pageable pageable);
	
	@Query("select r from Reservation r where r.hebergement.idHebergement=:x")
	public Reservation trouverReservationByHebergement(@Param("x")Long id);
	
	
	@Query("select r from Reservation r where  r.idReservation=:y and  r.client.idClient=:x")
	public Reservation consulterReservationById(@Param("y")Long idReservation, @Param("x")Long idClient);
	
	@Query("select r from Reservation r where  r.client.idClient=:x")
	public Page<Reservation> consulterReservationByIdClient(@Param("x")Long idClient, Pageable pageable);
	
	
	
	
	
	
	

	
} 