package com.puc.polo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.puc.polo.model.Admin;
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



}
