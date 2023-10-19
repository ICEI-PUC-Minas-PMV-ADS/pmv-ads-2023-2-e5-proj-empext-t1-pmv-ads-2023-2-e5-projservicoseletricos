package com.puc.polo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.puc.polo.model.Admin;


public interface AdminRepository extends JpaRepository<Admin, Integer>{
    
}
