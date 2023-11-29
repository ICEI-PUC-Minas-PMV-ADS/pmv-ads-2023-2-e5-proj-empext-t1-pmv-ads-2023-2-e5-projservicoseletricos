package com.puc.polo.servicos;
import org.springframework.stereotype.Service;
import java.util.List;
import com.puc.polo.model.Imagem;



@Service
public interface ImagemService {

    public Imagem create(Imagem imagem);
    public List<Imagem> viewAll();
    public Imagem viewById(long id);
    public List<Imagem> findByProdutoId(Integer idProduto);
}
