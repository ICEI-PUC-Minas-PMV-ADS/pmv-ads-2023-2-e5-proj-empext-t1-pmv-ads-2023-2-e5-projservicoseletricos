package com.puc.polo.model;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Component;


import lombok.Getter;
import lombok.Setter;


@Component
@Getter
@Setter
public class RespostaModel {
    
     public RespostaModel(String string) {
    }

    private String mensagem;
}
