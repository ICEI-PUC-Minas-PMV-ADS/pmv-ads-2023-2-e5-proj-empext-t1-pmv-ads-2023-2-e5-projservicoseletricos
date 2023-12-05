package com.puc.polo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Repository;

import com.puc.polo.model.User;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Integer>{
    UserDetails findByEmail(String email);

    @Query("select u from User u where upper(u.nome) like upper(:nome)")
    List<User> findByNome(@Param("nome") String nome);

    @Query("select u from User u where upper(u.email) = upper(:email)")
    User findByEmail2(String email);
}
