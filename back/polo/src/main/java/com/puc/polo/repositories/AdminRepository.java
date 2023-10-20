package com.puc.polo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.puc.polo.model.Admin;

@Repository
public interface AdminRepository extends JpaRepository<Admin, Integer>{
    
}
