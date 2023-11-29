package com.puc.polo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

import java.sql.Blob;
import java.util.Date;
@Entity
@Table(name = "imagens")
public class Imagem {
     @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Lob
    private Blob imagem;
    private Date date = new Date();

    @ManyToOne
    @JoinColumn(name = "produto_id")
    private Produto produto;



    public Produto getProduto() {
        return produto;
    }
    public void setProduto(Produto produto) {
        this.produto = produto;
    }
    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }
    public Blob getImagem() {
        return imagem;
    }
    public void setImagem(Blob imagem) {
        this.imagem = imagem;
    }
    public Date getDate() {
        return date;
    }
 
    
}
