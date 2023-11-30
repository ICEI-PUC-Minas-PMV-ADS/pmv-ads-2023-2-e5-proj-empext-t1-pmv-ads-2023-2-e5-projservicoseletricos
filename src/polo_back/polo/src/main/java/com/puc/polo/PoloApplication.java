package com.puc.polo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;


@SpringBootApplication
@ComponentScan(basePackages = "com.puc.polo") 
public class PoloApplication {

    public static void main(String[] args) {
        SpringApplication.run(PoloApplication.class, args);
    }

}
