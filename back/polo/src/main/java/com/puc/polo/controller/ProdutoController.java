package com.puc.polo.controller;

import com.puc.polo.model.Produto;
import com.puc.polo.repositories.ProdutoRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

import java.io.IOException;
import java.util.List;
import java.util.UUID;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/produtos")
@CrossOrigin("http://localhost:3000")
public class ProdutoController {

    private final ProdutoRepository repository;

    @Value("${upload.path}")
    private String uploadPath;

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
public Produto createProduto(@RequestPart("produto") Produto produto, @RequestPart("image") MultipartFile image) {
    log.info("Criando produto {}...", produto);

    try {
        // Verifique se um arquivo de imagem foi enviado
        if (!image.isEmpty()) {
            // Processar o upload da imagem
            byte[] imageData = image.getBytes();

            // Salvar os dados da imagem no objeto de produto
            produto.setImageData(imageData);
        }

        Produto savedProduto = repository.save(produto);
        log.info("Produto criado {}.", produto);
        return savedProduto;
    } catch (IOException e) {
        log.error("Erro ao fazer o upload da imagem", e);
        throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Erro no upload da imagem");
    }
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
    public void updateProduto(@PathVariable Integer id, @ModelAttribute Produto produto, @RequestParam("image") MultipartFile image) {
        repository
                .findById(id)
                .map(produtoNoBD -> {
                    try {
                        // Processar o upload da nova imagem
                        byte[] imageData = image.getBytes();

                        // Atualizar as informações do produto
                        produtoNoBD.setNome(produto.getNome());
                        produtoNoBD.setQuantidade(produto.getQuantidade());
                        produtoNoBD.setPreco(produto.getPreco());
                        produtoNoBD.setImageData(imageData);

                        repository.save(produtoNoBD);
                        return Void.TYPE;
                    } catch (IOException e) {
                        throw new RuntimeException(e);
                    }
                })
                .orElseThrow(() -> {
                    log.info("Produto não encontrado");
                    return new ResponseStatusException(HttpStatus.NOT_FOUND, "Produto não encontrado");
                });
    }
}
