package com.puc.polo.servicos;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import com.puc.polo.model.User;
import com.puc.polo.model.RespostaModel;
import com.puc.polo.repositories.UserRepository;

@Service
public class UserServices {

    @Autowired
    private UserRepository userRepo;
    @Autowired
    private RespostaModel resposta;

    // Listagem de usuários cadastrados
    public Iterable<User> listar() {
        return userRepo.findAll();
    }

    // Cadastro de usuário
    public ResponseEntity<?> cadastrar(User userModel) {
        if (userModel.getNome().equals("")) {
            resposta.setMensagem("O nome é obrigatório!");
            return new ResponseEntity<RespostaModel>(resposta, HttpStatus.BAD_REQUEST);
        } else if (userModel.getEmail().equals("")) {
            resposta.setMensagem("O email é obrigatório!");
            return new ResponseEntity<RespostaModel>(resposta, HttpStatus.BAD_REQUEST);
        } else if (userModel.getSenha().equals("")) {
            resposta.setMensagem("A senha é obrigatória!");
            return new ResponseEntity<RespostaModel>(resposta, HttpStatus.BAD_REQUEST);
        } else {
            return new ResponseEntity<User>(userRepo.save(userModel), HttpStatus.CREATED);
        }
    }

    // Alterar usuário
    public ResponseEntity<?> alterar(User userModel, String acao) {
        if (userModel.getNome().equals("")) {
            resposta.setMensagem("O nome é obrigatório!");
            return new ResponseEntity<RespostaModel>(resposta, HttpStatus.BAD_REQUEST);
        } else if (userModel.getEmail().equals("")) {
            resposta.setMensagem("O email é obrigatório!");
            return new ResponseEntity<RespostaModel>(resposta, HttpStatus.BAD_REQUEST);
        } else if (userModel.getSenha().equals("")) {
            resposta.setMensagem("A senha é obrigatória!");
            return new ResponseEntity<RespostaModel>(resposta, HttpStatus.BAD_REQUEST);
        } else {
            if (acao.equals("cadastrar")) {
                return new ResponseEntity<User>(userRepo.save(userModel), HttpStatus.CREATED);
            } else {
                return new ResponseEntity<User>(userRepo.save(userModel), HttpStatus.OK);
            }
        }
    }

    // Método para deletar usuário
    public ResponseEntity<RespostaModel> deletar(Integer id_User) {
        userRepo.deleteById(id_User);
        resposta.setMensagem("Usuário foi removido!");
        return new ResponseEntity<RespostaModel>(resposta, HttpStatus.OK);
    }
}
