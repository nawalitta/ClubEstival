package insa.entities;
import java.io.Serializable;
import java.util.Collection;

import javax.persistence.DiscriminatorColumn;
import javax.persistence.DiscriminatorType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.Lob;
import javax.persistence.OneToMany;
import javax.validation.constraints.DecimalMin;
import javax.validation.constraints.Size;

import org.hibernate.validator.constraints.NotEmpty;
@Entity
public class Restauration implements Serializable{
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long idRestauration;
	private String nomRestauration;
	@NotEmpty
	private String typeRestauration;
	private String typeRepas;
	@NotEmpty
	@Size(min = 4, max = 150)
	private String description;
	//@Lob
	//private byte[] photo;
	private String nomPhoto;
	@DecimalMin(value="150")
	private double tarifRestauration;
	
	/*@OneToMany(mappedBy="restauration")
    private Collection<Reservation> reservations;*/
	public Long getIdRestauration() {
		return idRestauration;
	}
	public void setIdRestauration(Long idRestauration) {
		this.idRestauration = idRestauration;
	}
	
	public String getNomRestauration() {
		return nomRestauration;
	}
	public void setNomRestauration(String nomRestauration) {
		this.nomRestauration = nomRestauration;
	}
	public double getTarifRestauration() {
		return tarifRestauration;
	}
	public void setTarifRestauration(double tarif) {
		this.tarifRestauration = tarif;
	}
	
	public String getTypeRestauration() {
		return typeRestauration;
	}
	public void setTypeRestauration(String typeRestauration) {
		this.typeRestauration = typeRestauration;
	}
	public String getTypeRepas() {
		return typeRepas;
	}
	public void setTypeRepas(String typeRepas) {
		this.typeRepas = typeRepas;
	}
	
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	/*public byte[] getPhoto() {
		return photo;
	}
	public void setPhoto(byte[] photo) {
		this.photo = photo;
	}*/
	public String getNomPhoto() {
		return nomPhoto;
	}
	public void setNomPhoto(String nomPhoto) {
		this.nomPhoto = nomPhoto;
	}
	/*public Collection<Reservation> getReservations() {
		return reservations;
	}
	public void setReservations(Collection<Reservation> reservations) {
		this.reservations = reservations;
	}*/
	public Restauration() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Restauration(String typeRestauration, String nomRestauration, String typeRepas, String description, String nomPhoto, double tarifRestauration) {
		super();
		this.nomRestauration= nomRestauration;
		this.description= description;
		this.nomPhoto=nomPhoto;
		this.tarifRestauration = tarifRestauration;
		this.typeRestauration = typeRestauration;
		this.typeRepas = typeRepas;
	}
	
	
  
}
