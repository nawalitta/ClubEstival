package insa.entities;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
@Entity
public class Versement implements Serializable{
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
   private Long idVersement;
   private Date dateVersement;
   private String typeVersement;
   private double montantPaye;
   @ManyToOne
   @JoinColumn(name="idReservation")
   private Reservation reservation;
public Long getIdVersement() {
	return idVersement;
}
public void setIdVersement(Long idVersement) {
	this.idVersement = idVersement;
}
public Date getDateVersement() {
	return dateVersement;
}
public void setDateVersement(Date dateVersement) {
	this.dateVersement = dateVersement;
}
public String getTypeVersement() {
	return typeVersement;
}
public void setTypeVersement(String typeVersement) {
	this.typeVersement = typeVersement;
}
public double getMontantPaye() {
	return montantPaye;
}
public void setMontantPaye(double montantPaye) {
	this.montantPaye = montantPaye;
}
public Reservation getReservation() {
	return reservation;
}
public void setReservation(Reservation reservation) {
	this.reservation = reservation;
}
public Versement() {
	super();
	// TODO Auto-generated constructor stub
}
public Versement(Date dateVersement, String typeVersement, double montantPaye) {
	super();
	this.dateVersement = dateVersement;
	this.typeVersement = typeVersement;
	this.montantPaye = montantPaye;
}
   

}
