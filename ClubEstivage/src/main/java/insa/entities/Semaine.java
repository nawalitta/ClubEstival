package insa.entities;

import java.io.Serializable; 
import java.util.Collection;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
@Entity
public class Semaine implements Serializable{
   @Id	
   private Long idSemaine;
   private Date datePremierJour;
   private Date dateDernierJour;
   
   
  
   public Date getDatePremierJour() {
	return datePremierJour;
}
public void setDatePremierJour(Date datePremierJour) {
	this.datePremierJour = datePremierJour;
}
public Date getDateDernierJour() {
	return dateDernierJour;
}
public void setDateDernierJour(Date dateDernierJour) {
	this.dateDernierJour = dateDernierJour;
}
/*@OneToMany(mappedBy="semaine")
   private Collection<Reservation> reservations;*/
public Long getIdSemaine() {
	return idSemaine;
}
public void setIdSemaine(Long idSemaine) {
	this.idSemaine = idSemaine;
}

/*public Collection<Reservation> getReservations() {
	return reservations;
}
public void setReservations(Collection<Reservation> reservations) {
	this.reservations = reservations;
}*/

public Semaine() {
	super();
	// TODO Auto-generated constructor stub
}
public Semaine(long idSemaine) {
	super();
	this.idSemaine = idSemaine;
	
}
   
}
