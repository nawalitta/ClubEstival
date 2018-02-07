package insa.entities;

import java.io.Serializable;
import java.util.Collection;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "users")
public class User implements Serializable {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "user_id")
	private Long idUser;
	@Column(name = "user_name")
	private String username;
	private String password;
	private boolean actived;
	private int role;
	
	public Client getFicheClient() {
		return ficheClient;
	}

	public void setFicheClient(Client ficheClient) {
		this.ficheClient = ficheClient;
	}

	@OneToOne
	@JoinColumn(name ="fiche_client")
	private Client ficheClient ; 

	// l'association est unidirectionnelle, donc il faut sp�cifier la jointure
	// ici
	// c�d l'annotation "@JoinColumn" ici et non pas dans la classe Role puisque
	// on n'a pas d�clar� d'objet user dans la classe "Role"
	



	public Long getIdUser() {
		return idUser;
	}

	public int getRole() {
		return role;
	}

	public void setRole(int role) {
		this.role = role;
	}

	public void setIdUser(Long idUser) {
		this.idUser = idUser;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public boolean isActived() {
		return actived;
	}

	public void setActived(boolean actived) {
		this.actived = actived;
	}


	public User() {
		super();
		// TODO Auto-generated constructor stub
	}

	public User(String username, String password, boolean actived) {
		super();
		this.role=0 ; 
		this.username = username;
		this.password = password;
		this.actived = actived;
	}

}
