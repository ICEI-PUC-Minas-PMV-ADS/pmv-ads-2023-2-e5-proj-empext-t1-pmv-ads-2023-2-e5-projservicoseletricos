package com.puc.polo.controller;

import com.puc.polo.model.Produto;
import com.puc.polo.repositories.ProdutoRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import com.puc.polo.model.User;
import com.puc.polo.repositories.UserRepository;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Set;

@RestController
@RequiredArgsConstructor
@Slf4j
@RequestMapping("/api/user")
public class UserController {

  private final UserRepository repository;
  private final ProdutoRepository produtoRepository;

  @GetMapping()
  @ResponseStatus(HttpStatus.OK)
  public List<User> getAll() {
    return repository.findAll();
  }

  @GetMapping("{id}")
  public User getById(@PathVariable Integer id){
    return repository.findById(id)
            .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Usuário não encontrado"));
  }

  @GetMapping("/filtrar")
  public List<User> filtrarPorNome(
          @RequestParam(value="nome", required = false, defaultValue = "") String nome)
  {
    return repository.findByNome("%" + nome + "%");
  }

  @PutMapping("/{idUser}/{idProduto}")
  @ResponseStatus(HttpStatus.NO_CONTENT)
  public User adicionarOrcamento(
          @PathVariable Integer idUser,
          @PathVariable Integer idProduto
  ){
    List<Produto> produtosOrcamento = null;
    User cliente = repository.findById(idUser).get();
    Produto produto = produtoRepository.findById(idProduto).get();
    produtosOrcamento = cliente.getProdutos();
    produtosOrcamento.add(produto);
    cliente.setProdutos(produtosOrcamento);
    return repository.save(cliente);
  }

  @DeleteMapping("{idUser}")
  @ResponseStatus(HttpStatus.NO_CONTENT)
  public void deletarUsuario(@PathVariable Integer idUser){
    log.info("Deletando usuário de id {}...", idUser);
    repository.deleteById(idUser);
    log.info("Usuário de id {} deletado.", idUser);
  }
}
