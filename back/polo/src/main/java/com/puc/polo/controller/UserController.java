package com.puc.polo.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import com.puc.polo.model.User;
import com.puc.polo.repositories.UserRepository;

import java.util.List;

@RestController
@RequiredArgsConstructor
@Slf4j
@RequestMapping("/api/user")
public class UserController {

  private final UserRepository repository;

  @GetMapping()
  @ResponseStatus(HttpStatus.OK)
  public List<User> getAll() {
    return repository.findAll();
  }

  @GetMapping("/filtrar")
  public List<User> filtrarPorNome(
          @RequestParam(value="nome", required = false, defaultValue = "") String nome)
  {
    return repository.findByNome("%" + nome + "%");
  }
}
