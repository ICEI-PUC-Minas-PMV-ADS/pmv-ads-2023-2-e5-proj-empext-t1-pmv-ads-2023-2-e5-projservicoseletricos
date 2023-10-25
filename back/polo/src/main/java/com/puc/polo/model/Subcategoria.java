package com.puc.polo.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Table(name = "subcategorias")
@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Subcategoria {
    @Id
    @Column(name = "id_subcategoria")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "nome")
    private String nome;
}
