package com.puc.polo.repositories;

import com.puc.polo.model.Produto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProdutoRepository extends JpaRepository<Produto, Integer> {

    List<Produto> findByIdCategoria(Integer idCategoria);
}
