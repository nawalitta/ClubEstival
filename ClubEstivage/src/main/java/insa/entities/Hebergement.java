
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
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.validation.constraints.DecimalMin;
import javax.validation.constraints.Size;

import org.hibernate.validator.constraints.NotEmpty;

@Entity
public class Hebergement implements Serializable {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idHebergement;
	private String nomHebergement;
	@NotEmpty
	private String typeHebergement;
	@NotEmpty
	@Size(min = 4, max = 70)
	private String description;
	@Lob
	private byte[] photo;
	private String nomPhoto;
	@DecimalMin(value = "1000")
	private double tarifHebergement;
	@NotEmpty
	@Size(min = 4, max = 70)
	private String emplacement;
	private String disponibilite;
	/*@OneToMany(mappedBy = "hebergement")
	private Collection<Reservation> reservations;*/

	public Long getIdHebergement() {
		return idHebergement;
	}

	public void setIdHebergement(Long idHebergement) {
		this.idHebergement = idHebergement;
	}

	public String getTypeHebergement() {
		return typeHebergement;
	}

	public void setTypeHebergement(String typeHebergement) {
		this.typeHebergement = typeHebergement;
	}

	public double getTarifHebergement() {
		return tarifHebergement;
	}

	public void setTarifHebergement(double tarifHebergement) {
		this.tarifHebergement = tarifHebergement;
	}
    
	public String getNomHebergement() {
		return nomHebergement;
	}

	public void setNomHebergement(String nomHebergement) {
		this.nomHebergement = nomHebergement;
	}

	public String getEmplacement() {
		return emplacement;
	}

	public void setEmplacement(String emplacement) {
		this.emplacement = emplacement;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public byte[] getPhoto() {
		return photo;
	}

	public void setPhoto(byte[] photo) {
		this.photo = photo;
	}

	public String getNomPhoto() {
		return nomPhoto;
	}

	public void setNomPhoto(String nomPhoto) {
		this.nomPhoto = nomPhoto;
	}

	public String getDisponibilite() {
		return disponibilite;
	}

	public void setDisponibilite(String disponibilite) {
		this.disponibilite = disponibilite;
	}

	/*public Collection<Reservation> getReservations() {
		return reservations;
	}

	public void setReservations(Collection<Reservation> reservations) {
		this.reservations = reservations;
	}
*/
	public Hebergement() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Hebergement(String typeHebergement, String nomHebergement, String description, String emplacement, String disponible,/* byte[] photo,*/
			String nomPhoto, double tarifHebergement) {
		super();
		this.typeHebergement = typeHebergement;
		this.nomHebergement=nomHebergement;
		this.description = description;
		//this.photo = photo;
		this.nomPhoto = nomPhoto;
		this.tarifHebergement = tarifHebergement;
		this.emplacement = emplacement;
		this.disponibilite = disponible;
	}
	@Override
	public String toString() {
		
		return description+ typeHebergement + idHebergement + "insa";
	}

}
