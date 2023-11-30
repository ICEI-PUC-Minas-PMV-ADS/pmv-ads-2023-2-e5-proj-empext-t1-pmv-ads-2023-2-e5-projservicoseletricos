package com.puc.polo.controller;

import com.puc.polo.model.Produto;
import com.puc.polo.model.ServicosOferecidos;
import com.puc.polo.repositories.ServicoRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/servicos")
public class ServicoController {

    private final ServicoRepository repository;

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<ServicosOferecidos> getServicos() {
        return repository.findAll();
    }

    @GetMapping("{id}")
    public ServicosOferecidos getById(@PathVariable Integer id){
        return repository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Serviço não encontrado"));
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ServicosOferecidos createServico(@RequestBody ServicosOferecidos servico) {
        log.info("Criando serviço {}...", servico);
        ServicosOferecidos savedProduto = repository.save(servico);
        log.info("Serviço criado {}.", servico);
        return savedProduto;
    }

    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteServico(@PathVariable Integer id) {
        log.info("Deletando servico de id {}...", id);
        repository
                .findById(id)
                .map(servico -> {
                    repository.delete(servico);
                    return Void.TYPE;
                })
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Servico não encontrado"));
        log.info("Serviço de id {} deletado.", id);

    }

    @PutMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void updateServico(@PathVariable Integer id, @RequestBody ServicosOferecidos servicoAtualizado) {
        repository
                .findById(id)
                .map(servico -> {
                    servicoAtualizado.setIdServico(servico.getIdServico());
                    repository.save(servicoAtualizado);
                    return Void.TYPE;
                })
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Servico não encontrado"));
    }
}
