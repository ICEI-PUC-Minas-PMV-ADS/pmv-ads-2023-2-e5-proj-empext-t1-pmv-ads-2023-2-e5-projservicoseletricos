package com.puc.polo.controller;

import com.puc.polo.model.Subcategoria;
import com.puc.polo.repositories.SubcategoriaRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/subcategorias")
public class SubcategoriaController {

    private final SubcategoriaRepository repository;

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<Subcategoria> get() {
        return repository.findAll();
    }

    @GetMapping("{id}")
    @ResponseStatus(HttpStatus.OK)
    public Subcategoria getById(@PathVariable Integer id) {
        return repository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Subacategoria não encontrada."));
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Subcategoria save(@RequestBody Subcategoria subcategoria) {
        return repository.save(subcategoria);
    }

    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Integer id) {
        repository.deleteById(id);
    }
}
