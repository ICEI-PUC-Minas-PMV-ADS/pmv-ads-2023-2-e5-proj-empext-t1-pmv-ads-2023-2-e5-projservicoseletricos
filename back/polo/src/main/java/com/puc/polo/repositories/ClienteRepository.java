package com.puc.polo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.puc.polo.model.Clientes;


public interface ClienteRepository extends JpaRepository<Clientes, Integer> {
    
}
