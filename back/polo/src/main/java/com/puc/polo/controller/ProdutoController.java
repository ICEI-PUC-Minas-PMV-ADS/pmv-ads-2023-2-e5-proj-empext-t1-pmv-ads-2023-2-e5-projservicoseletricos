package com.puc.polo.controller;

import com.puc.polo.model.Produto;
import com.puc.polo.repositories.ProdutoRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.net.http.HttpResponse;
import java.util.List;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/produtos")
public class ProdutoController {

    private final ProdutoRepository repository;

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<Produto> getProdutos() {
        return repository.findAll();
    }

    @GetMapping("{id}")
    public Produto getById(@PathVariable Integer id){
        return repository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Produto não encontrado"));
    }


    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Produto createProduto(@RequestBody Produto produto) {
        log.info("Criando produto {}...", produto);
        Produto savedProduto = repository.save(produto);
        log.info("Produto criado {}.", produto);
        return savedProduto;
    }

    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteProduto(@PathVariable Integer id) {
        log.info("Deletando produto de id {}...", id);
        repository.deleteById(id);
        log.info("Produto de id {} deletado.", id);

    }

    @PutMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void updateProduto(@PathVariable Integer id, @RequestBody Produto produtoAtualizado) {
        repository
                .findById(id)
                .map(servico -> {
                    produtoAtualizado.setIdProduto(servico.getIdProduto());
                    repository.save(produtoAtualizado);
                    return Void.TYPE;
                })
                .orElseThrow(() -> {
                    log.info("Produto não encontrado");
                    return new ResponseStatusException(HttpStatus.NOT_FOUND, "Produto não encontrado");
                });
                }
}
