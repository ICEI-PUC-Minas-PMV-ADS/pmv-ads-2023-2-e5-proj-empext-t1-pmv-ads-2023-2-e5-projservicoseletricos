package com.puc.polo.repositories;

import com.puc.polo.model.Produto;
import jakarta.annotation.Nullable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ProdutoRepository extends JpaRepository<Produto, Integer> {
    @Query(value = "FROM Produto where categoria.id in (:ids) or subcategoria.id in (:ids)")
    Optional<Produto> findByCategoriaOrSubcategoria(@Nullable List<Integer> ids);
}
