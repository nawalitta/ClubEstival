package insa.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import insa.entities.Role;

public interface RoleRepository extends JpaRepository<Role,Long>  {

	
	
}
