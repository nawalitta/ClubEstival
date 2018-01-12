package insa.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import insa.entities.User;

public interface UserRepository extends JpaRepository<User,Long>  {

	
	
}
