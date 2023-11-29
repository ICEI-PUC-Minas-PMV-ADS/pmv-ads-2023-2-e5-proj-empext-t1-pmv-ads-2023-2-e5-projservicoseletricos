package com.puc.polo.servicos;

import com.puc.polo.model.Imagem;
import com.puc.polo.repositories.ImagemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;



@Service
public class ImagemServiceImpl implements ImagemService {
    
 @Autowired
    private ImagemRepository imagemRepository;

    @Override
    public Imagem create(Imagem imagem) {
        return imagemRepository.save(imagem);
    }
    @Override
    public List<Imagem> viewAll() {
        return (List<Imagem>) imagemRepository.findAll();
    }
    @Override
    public Imagem viewById(long id) {
        return imagemRepository.findById(id).get();
    }
    @Override
    public List<Imagem> findByProdutoId(Integer idProduto) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'findByProdutoId'");
    }

}
