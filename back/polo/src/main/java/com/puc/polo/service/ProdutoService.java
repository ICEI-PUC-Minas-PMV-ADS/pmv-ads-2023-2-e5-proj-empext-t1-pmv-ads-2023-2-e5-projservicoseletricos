package com.puc.polo.service;

import com.puc.polo.model.Produto;
import com.puc.polo.repositories.ProdutoRepository;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.UUID;

@Service
public class ProdutoService {

    private final ProdutoRepository repository;

    @Value("${upload.path}")
    private String uploadPath;

    public ProdutoService(ProdutoRepository repository) {
        this.repository = repository;
    }

    public List<Produto> getAllProdutos() {
        return repository.findAll();
    }

    public Produto getProdutoById(Integer id) {
        return repository.findById(id).orElse(null);
    }

    public Produto createProduto(Produto produto, MultipartFile image) throws IOException {
        byte[] imageData = image.getBytes();
        produto.setImageData(imageData);
        return repository.save(produto);
    }

    public void deleteProduto(Integer id) {
        repository.deleteById(id);
    }

    public Produto updateProduto(Integer id, Produto produto, MultipartFile image) throws IOException {
        Produto produtoNoBD = repository.findById(id).orElse(null);

        if (produtoNoBD != null) {
            byte[] imageData = image.getBytes();
            produtoNoBD.setNome(produto.getNome());
            produtoNoBD.setQuantidade(produto.getQuantidade());
            produtoNoBD.setPreco(produto.getPreco());
            produtoNoBD.setImageData(imageData);
            return repository.save(produtoNoBD);
        } else {
            return null;
        }
    }

    public String uploadImage(MultipartFile image) throws IOException {
        String uniqueFileName = UUID.randomUUID() + "_" + image.getOriginalFilename();
        String imagePath = uploadPath + java.io.File.separator + uniqueFileName;
        java.io.File dest = new java.io.File(imagePath);
        image.transferTo(dest);
        return imagePath;
    }
}
