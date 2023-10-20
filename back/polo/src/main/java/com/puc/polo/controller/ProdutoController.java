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

import java.io.File;
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
    public Produto getById(@PathVariable Integer id){
        return repository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Produto não encontrado"));
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Produto createProduto(@RequestPart("produto") Produto produto, @RequestPart("image") MultipartFile image) {
        log.info("Criando produto {}...", produto);

        try {
            // Processar o upload da imagem
            String imagePath = uploadImage(image);

            // Salvar o caminho da imagem no objeto de produto
            produto.setImagePath(imagePath);

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
    public void updateProduto(@PathVariable Integer id, @RequestPart("produto") Produto produto, @RequestPart("image") MultipartFile image) {
        repository
                .findById(id)
                .map(produtoNoBD -> {
                    // Processar o upload da nova imagem
                    String imagePath;
                    try {
                        imagePath = uploadImage(image);
                    } catch (IOException e) {
                        throw new RuntimeException(e);
                    }

                    // Atualizar as informações do produto
                    produtoNoBD.setNome(produto.getNome());
                    produtoNoBD.setDescricao(produto.getDescricao());
                    produtoNoBD.setImagePath(imagePath);

                    repository.save(produtoNoBD);
                    return Void.TYPE;
                })
                .orElseThrow(() -> {
                    log.info("Produto não encontrado");
                    return new ResponseStatusException(HttpStatus.NOT_FOUND, "Produto não encontrado");
                });
    }

    private String uploadImage(MultipartFile image) throws IOException {
        // Gere um nome de arquivo único para evitar colisões
        String uniqueFileName = UUID.randomUUID() + "_" + image.getOriginalFilename();
        String imagePath = uploadPath + File.separator + uniqueFileName;

        // Faça o upload do arquivo
        File dest = new File(imagePath);
        image.transferTo(dest);

        // Retorne o caminho da imagem
        return imagePath;
    }
}
