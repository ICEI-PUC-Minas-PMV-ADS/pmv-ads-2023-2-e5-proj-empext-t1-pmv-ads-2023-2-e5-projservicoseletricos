package com.puc.polo.model.Dto;

public record RegisterDTO(String nome, String sobrenome, String email, String senha,
                          String cep, String logradouro, String bairro, String numero, String complemento, String empresa, String role) {
}
