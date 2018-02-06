package insa.dao;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import insa.entities.Client;
import insa.entities.User;

public interface UserRepository extends JpaRepository<User,Long>  {
	
	
	
	@Query("select u from User u where u.actived= :ac")
	public List<User> UserNonActive(@Param("ac")Boolean ac);
	
	
	@Query("UPDATE User u SET u.actived= :ac WHERE u.idUser= :id")
	public boolean activate(@Param("ac")Boolean ac ,@Param("id") Long id );
	
	/*@Query("UPDATE Company c SET c.address = :address WHERE c.id = :companyId")
    int updateAddress(@Param("companyId") int companyId, @Param("address") String address);*/
	     
}
