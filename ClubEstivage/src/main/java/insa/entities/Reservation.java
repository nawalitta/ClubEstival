
package insa.entities;

import java.io.Serializable;
import java.util.Collection;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;



@Entity
public class Reservation implements Serializable {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idReservation;
	private String nomReservation;
	private int nbrPersonne;
	private int nbrSemaine;
	private double total;
	private String typePaiement;
	@OneToMany(mappedBy = "reservation")
	private Collection<Versement> versements;
	@ManyToOne
	@JoinColumn(name = "idHebergement")
	private Hebergement hebergement;
	@ManyToOne
	@JoinColumn(name = "idRestauration")
	private Restauration restauration;
	@ManyToOne
	@JoinColumn(name = "idSemaine")
	private Semaine semaine;
	@ManyToOne
	@JoinColumn(name = "idClient")
	private Client client;
	public Client getClient() {
		return client;
	}

	public void setClient(Client client) {
		this.client = client;
	}
	
	public Long getIdReservation() {
		return idReservation;
	}

	public void setIdReservation(Long idReservation) {
		this.idReservation = idReservation;
	}

	public String getNomReservation() {
		return nomReservation;
	}

	public void setNomReservation(String nomReservation) {
		this.nomReservation = nomReservation;
	}

	public double getTotal() {
		return total;
	}

	public void setTotal(double total) {

	}

	public int getNbrPersonne() {
		return nbrPersonne;
	}

	public void setNbrPersonne(int nbrPersonne) {
		this.nbrPersonne = nbrPersonne;
	}

	public String getTypePaiement() {
		return typePaiement;
	}

	public void setTypePaiement(String typePaiement) {
		this.typePaiement = typePaiement;
	}

	public int getNbrSemaine() {
		return nbrSemaine;
	}

	public void setNbrSemaine(int nbrSemaine) {
		this.nbrSemaine = nbrSemaine;
	}

	public Collection<Versement> getVersements() {
		return versements;
	}

	public void setVersements(Collection<Versement> versements) {
		this.versements = versements;
	}

	public Hebergement getHebergement() {
		return hebergement;
	}

	public void setHebergement(Hebergement hebergement) {
		this.hebergement = hebergement;
	}

	public Restauration getRestauration() {
		return restauration;
	}

	public void setRestauration(Restauration restauration) {
		this.restauration = restauration;
	}

	public Semaine getSemaine() {
		return semaine;
	}

	public void setSemaine(Semaine semaine) {
		this.semaine = semaine;
	}

	public Reservation() {
		super();
	

	}

	public Reservation(String nomReservation, int nbrPersonne, int nbrSemaine, Client client, Hebergement hebergement) {
		super();
		this.nomReservation = nomReservation;
		this.nbrPersonne = nbrPersonne;
		this.nbrSemaine = nbrSemaine;
		this.client=client;
		this.hebergement=hebergement;

	}

}
