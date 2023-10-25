package com.puc.polo.controller;

import com.puc.polo.model.Produto;
import com.puc.polo.repositories.ProdutoRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.net.http.HttpResponse;
import java.util.List;
import java.util.Optional;

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

    @GetMapping("{id}")
    public Produto getById(@PathVariable Integer id) {
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

    @GetMapping("/filter/{idCategoria, idSubcategoria}")
    @ResponseStatus(HttpStatus.OK)
    public Produto findProdutoByIdCategoriaOrIdSubcategoria(@PathVariable Integer idCategoria, @PathVariable Integer idSubcategoria) throws ChangeSetPersister.NotFoundException {
        return repository.findByCategoriaOrSubcategoria(idCategoria, idSubcategoria)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Produto não encontrado"));
    }
}
