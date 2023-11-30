package com.puc.polo.controller;

import com.puc.polo.model.Categoria;
import com.puc.polo.repositories.CategoriaRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/categorias")
public class CategoriaController {

    private final CategoriaRepository repository;

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<Categoria> getCategorias() {
        return this.repository.findAll();
    }

    @GetMapping("{id}")
    @ResponseStatus(HttpStatus.OK)
    public Categoria getById(@PathVariable Integer id) {
        return this.repository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Categoria não encontrada"));
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Categoria save(@RequestBody Categoria categoria) {
        return this.repository.save(categoria);
    }

    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Integer id) {
        repository.deleteById(id);
    }
}
