package com.puc.polo.controller;

import com.puc.polo.model.Produto;
import com.puc.polo.repositories.ProdutoRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.net.http.HttpResponse;
import java.util.List;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/produtos")
public class ProdutoController {

    private final ProdutoRepository repository;

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<Produto> getProdutos() {
        return repository.findAll();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Produto createProduto(@RequestBody Produto produto) {
        log.info("Criando produto {}...", produto);
        Produto savedProduto = repository.save(produto);
        log.info("Produto criado {}.", produto);
        return savedProduto;
    }

    @DeleteMapping
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteProduto(@RequestParam Integer id) {
        log.info("Deletando produto de id {}...", id);
        repository.deleteById(id);
        log.info("Produto de id {} deletado.", id);

    }

    @PatchMapping
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void updateProduto(@RequestParam Integer id, @RequestBody Produto produto) {
        if (repository.existsById(id)) {
            repository.save(produto);
        } else {
            log.info("Produto com id {} não encontrado.", id);
        }
    }
}
