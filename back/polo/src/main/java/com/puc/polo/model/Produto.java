package com.puc.polo.model;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;

@Table(name = "produtos")
@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Produto {
    @Id
    @Column(name = "id_produto")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idProduto;

    @Column(name = "nome")
    private String nome;

    @Column(name = "marca")
    private String marca;

    @Column(name = "garantia")
    private char garantia;

    @Column(name = "especificacoes")
    private String especificacoes;

    @Column(name = "quantidade")
    private Integer quantidade;

    @Column(name = "preco")
    private BigDecimal preco;

    @Column(name = "id_categoria")
    private Integer idCategoria;

    @Column(name = "image")
    private String image;
}
