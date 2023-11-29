package com.puc.polo.repositories;

import org.springframework.stereotype.Repository;

import com.puc.polo.model.Imagem;

import org.springframework.data.repository.CrudRepository;


@Repository
public interface  ImagemRepository extends CrudRepository <Imagem, Long> {

    
}
