package com.puc.polo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.puc.polo.model.Admin;
import com.puc.polo.model.RespostaModel;
import com.puc.polo.repositories.AdminRepository;
import com.puc.polo.servicos.AdminServices;

@CrossOrigin(origins="*")
@RestController
public class AdminController {


@Autowired
private AdminServices AdmServ;
@GetMapping("/listar")
public Iterable<Admin> listar(){
    return AdmServ.listar();
}


@PostMapping("/cadastrar")
public ResponseEntity<?> cadastrar(@RequestBody Admin AdmModel){
    return AdmServ.cadastrar(AdmModel);
}

@PutMapping("/alterar")
public ResponseEntity<?> alterar(@RequestBody Admin AdmModel ){
    return AdmServ.alterar(AdmModel, "alterar");

}

@DeleteMapping("/excluir/{id_Admini}")
public ResponseEntity<RespostaModel>remover(@PathVariable int id_Admin){
    return AdmServ.deletar(id_Admin);
}



}