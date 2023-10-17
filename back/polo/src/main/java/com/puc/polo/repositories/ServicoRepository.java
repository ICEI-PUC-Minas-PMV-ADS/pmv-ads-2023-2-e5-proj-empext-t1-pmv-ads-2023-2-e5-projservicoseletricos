package com.puc.polo.repositories;

import com.puc.polo.model.ServicosOferecidos;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ServicoRepository extends JpaRepository<ServicosOferecidos, Integer> {
}
