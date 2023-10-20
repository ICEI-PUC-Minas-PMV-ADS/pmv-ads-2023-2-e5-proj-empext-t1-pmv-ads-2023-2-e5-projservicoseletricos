package com.puc.polo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.puc.polo.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer>{
    
}
