package insa.entities;

import java.io.Serializable;
import java.util.Collection;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
@Entity
public class Semaine implements Serializable{
   @Id	
   private int idSemaine;
  
   @OneToMany(mappedBy="semaine")
   private Collection<Reservation> reservations;
public int getIdSemaine() {
	return idSemaine;
}
public void setIdSemaine(int idSemaine) {
	this.idSemaine = idSemaine;
}

public Collection<Reservation> getReservations() {
	return reservations;
}
public void setReservations(Collection<Reservation> reservations) {
	this.reservations = reservations;
}
public Semaine() {
	super();
	// TODO Auto-generated constructor stub
}
public Semaine(int idSemaine) {
	super();
	this.idSemaine = idSemaine;
	
}
   
}
