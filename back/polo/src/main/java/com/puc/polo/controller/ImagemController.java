package com.puc.polo.controller;

import java.io.IOException;
import java.sql.Blob;
import java.sql.SQLException;
import java.util.List;

import javax.sql.rowset.serial.SerialBlob;
import javax.sql.rowset.serial.SerialException;
import org.springframework.http.MediaType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import com.puc.polo.model.Imagem;
import com.puc.polo.model.Produto;
import com.puc.polo.repositories.ImagemRepository;
import com.puc.polo.servicos.ImagemService;

import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/imagens")
@CrossOrigin(origins = "*")
public class ImagemController {

    @Autowired
    private ImagemService imagemService;
    @Autowired
    private ProdutoController produtoController;

    @Autowired
    private ImagemRepository imagemRepository;

    // display image
    @GetMapping("/")
    public ResponseEntity<byte[]> displayImage(@RequestParam("id") long id) throws IOException, SQLException {
        Imagem imagem = imagemService.viewById(id);
        byte[] imageBytes = null;
        imageBytes = imagem.getImagem().getBytes(1, (int) imagem.getImagem().length());
        return ResponseEntity.ok().contentType(MediaType.IMAGE_JPEG).body(imageBytes);
    }

    // view All images
    @GetMapping("/imagens")
    public ModelAndView home() {
        ModelAndView mv = new ModelAndView("index");
        List<Imagem> imagemList = imagemService.viewAll();
        mv.addObject("imagemList", imagemList);
        return mv;
    }

    // add image - get
    @GetMapping("/add")
    public ModelAndView addImage() {
        return new ModelAndView("addimage");
    }

    // add image - post
    @PostMapping("/produto/{idproduto}")
    public String addImagePost(
            @RequestParam("image") MultipartFile file,
            @PathVariable Integer idproduto) throws IOException, SQLException {
        byte[] bytes = file.getBytes();
        Blob blob = new SerialBlob(bytes);

        // Recupera o produto diretamente do controlador de produtos
        Produto produto = produtoController.getById(idproduto);

        if (produto != null) {
            // Cria uma nova imagem e a associa ao produto
            Imagem imagem = new Imagem();
            imagem.setImagem(blob);
            imagem.setProduto(produto);
            imagemRepository.save(imagem);
            return "Imagem adicionada ao produto com sucesso.";
        } else {
            return "Produto não encontrado com o ID: " + idproduto;
        }
    }

}
