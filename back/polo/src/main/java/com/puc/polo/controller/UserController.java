package com.puc.polo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.puc.polo.servicos.UserServices;
import com.puc.polo.model.User;
import com.puc.polo.model.RespostaModel;
import com.puc.polo.repositories.UserRepository;

@CrossOrigin("http://localhost:3000")
@RequestMapping("/Usuarios")
@RestController
public class UserController {

  @Autowired
  private UserServices userService;
  @GetMapping("/Usuarios")
  public Iterable<User> listar() {
    return userService.listar();
  }

  @PostMapping("/Usuarios")
  public ResponseEntity<?> cadastrar(@RequestBody User userModel) {
    return userService.cadastrar(userModel);
  }

  @PutMapping("/Usuarios")
  public ResponseEntity<?> alterar(@RequestBody User userModel) {
    return userService.alterar(userModel, "alterar");
  }

  @DeleteMapping("/Usuarios/{id}")
  public ResponseEntity<RespostaModel> remover(@PathVariable int id) {
    return userService.deletar(id);
  }
}
