package com.puc.polo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.puc.polo.model.Clientes;

import com.puc.polo.repositories.ClienteRepository;

import lombok.RequiredArgsConstructor;


@RestController
@RequiredArgsConstructor
@RequestMapping("/clientes")
@CrossOrigin(origins = "*")
public class ClientesController {

    
     private  ClienteRepository ClienteRepository;

    @GetMapping("/listar")
     @ResponseStatus(HttpStatus.OK)
    public List<Clientes> getClientes() {
        return ClienteRepository.findAll();
    }

    @GetMapping("/listar/{id}")
     public Clientes getById(@PathVariable Integer id){
        return ClienteRepository.findById(id)
            .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Cliente não encontrado.."));
    }
    
      @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Clientes cadastrarCliente(@RequestBody Clientes cliente) {
       
      
        Clientes clienteCriado = ClienteRepository.save(cliente);
        log.info("Cliente criado.");
        return clienteCriado;
    }

    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteCliente(@PathVariable Integer id) {
    
        log.info("Deletando cliente...");
        ClienteRepository.deleteById(id);
        log.info("Cliente deletado.");

    }
    @PutMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void AlterarCliente(@PathVariable Integer id, @RequestBody Clientes clienteSaved) {
        ClienteRepository
                .findById(id)
                .map(servico -> {
                    clienteSaved.setId_cliente(servico.getClienteId());
                
                    ClienteRepository.save(clienteSaved);
                    return Void.TYPE;
                })
                .orElseThrow(() -> {
     
                    log.info("Cliente não encontrado");
                    return new ResponseStatusException(HttpStatus.NOT_FOUND, "Cliente não encontrado");
                });
                }

    
}
