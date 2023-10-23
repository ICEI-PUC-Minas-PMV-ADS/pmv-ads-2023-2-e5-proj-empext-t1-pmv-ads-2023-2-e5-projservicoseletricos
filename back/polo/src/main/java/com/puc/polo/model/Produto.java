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

    @Column(name = "quantidade")
    private Integer quantidade;

    @Column(name = "preco")
    private BigDecimal preco;

    @Lob
    @Column(name = "image_path")
    private byte[] imageData;

    @Column(name="descricao")
    private String descricao;
 

    public Object getDescricao() {
        return null;
    }

    public void setDescricao(Object descricao) {
    }

    // Create a method to set the image data
    public void setImageData(byte[] imageData) {
        this.imageData = imageData;
    }

    // Create a method to get the image data
    public byte[] getImageData() {
        return imageData;
    }
}

