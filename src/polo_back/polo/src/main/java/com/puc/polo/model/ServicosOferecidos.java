package com.puc.polo.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Table(name = "servicos")
@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ServicosOferecidos {

    @Id
    @Column(name = "id_servicos")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idServico;

    private String nome;

    private String descricao;

    private String image;

}
