package com.puc.polo.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.*;

@Entity
@Table(name = "User")  // Nome da tabela corrigido para "User"
@Getter
@Setter
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class User implements UserDetails {

    @Id
    @Column(name = "id_user")  // Se desejar, você pode corrigir o nome da coluna do ID
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idUser;  // Corrigido para refletir o nome da tabela

    @Column(name = "nome")
    private String nome;

    @Column(name = "sobrenome")
    private String sobrenome;

    @Column(name = "email")
    private String email;

    @Column(name = "senha")
    private String senha;  // Corrigido para usar letras minúsculas

    @Column(name = "cep")
    private String cep;

    @Column(name = "logradouro")
    private String logradouro;

    @Column(name = "bairro")
    private String bairro;

    @Column(name = "numero")
    private String numero;

    @Column(name = "complemento")
    private String complemento;

    @Column(name = "empresa")
    private String empresa;

    @Column(name = "role")
    private String role;

    @ManyToMany
    @JoinTable(name = "orcamentos",
    joinColumns = @JoinColumn(name = "id_user"),
    inverseJoinColumns = @JoinColumn(name = "id_produto"))
    private List<Produto> produtos = new ArrayList<>();

    public User(String nome, String sobrenome, String email, String senha, String cep, String logradouro,
                String bairro, String numero, String complemento, String empresa, String role){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.senha = senha;
        this.cep = cep;
        this.logradouro = logradouro;
        this.bairro = bairro;
        this.numero = numero;
        this.complemento = complemento;
        this.empresa = empresa;
        this.role = role;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        if (Objects.equals(this.role, "ADMIN")) return List.of(new SimpleGrantedAuthority("ROLE_ADMIN"), new SimpleGrantedAuthority("ROLE_USER"));
        else return List.of(new SimpleGrantedAuthority("ROLE_USER"));
    }

    @Override
    public String getPassword() {
        return senha;
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
