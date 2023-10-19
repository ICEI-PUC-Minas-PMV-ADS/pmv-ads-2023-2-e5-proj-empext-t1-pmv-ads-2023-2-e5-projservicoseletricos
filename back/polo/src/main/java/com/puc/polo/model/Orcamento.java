package com.puc.polo.model;

import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import lombok.Builder;
import lombok.Data;
import lombok.Getter;

import lombok.Setter;

@Entity
@Table(name = "orcamentos")
@Getter
@Setter
@Data
@Builder

public class Orcamento {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "orcamentos")
    private Integer id_orcamento;

    private Integer id_cliente;

    private Float valor;

    private Date data;

    
}
