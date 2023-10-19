package com.puc.polo.servicos;

import javax.net.ssl.HttpsURLConnection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.puc.polo.model.Admin;
import com.puc.polo.model.RespostaModel;
import com.puc.polo.repositories.AdminRepository;

@Service
public class AdminServices {

    @Autowired
    private AdminRepository AdminRepo;
    @Autowired
    private RespostaModel Resposta;

    // listagem de usuarios cadastrados
    public Iterable<Admin> listar() {
        return AdminRepo.findAll();
    }

    // cadastro de admin
    public ResponseEntity<?> cadastrar(Admin AdmModel) {

        if (AdmModel.getNome().equals("")) {
            Resposta.setMensagem("O nome é obrigatório!");
            return new ResponseEntity<RespostaModel>(Resposta, HttpStatus.BAD_REQUEST);
        } else if (AdmModel.getEmail().equals("")) {
            Resposta.setMensagem("O email é obrigatório!");
            return new ResponseEntity<RespostaModel>(Resposta, HttpStatus.BAD_REQUEST);
        } else if (AdmModel.getSenha().equals("")) {
            Resposta.setMensagem("A senha é obrigatória!");
            return new ResponseEntity<RespostaModel>(Resposta, HttpStatus.BAD_REQUEST);
        } else {
            return new ResponseEntity<Admin>(AdminRepo.save(AdmModel), HttpStatus.CREATED);
        }

    }

    //alterar codigo

     public ResponseEntity<?> alterar(Admin AdmModel, String acao) {

        if (AdmModel.getNome().equals("")) {
            Resposta.setMensagem("O nome é obrigatório!");
            return new ResponseEntity<RespostaModel>(Resposta, HttpStatus.BAD_REQUEST);
        } else if (AdmModel.getEmail().equals("")) {
            Resposta.setMensagem("O email é obrigatório!");
            return new ResponseEntity<RespostaModel>(Resposta, HttpStatus.BAD_REQUEST);
        } else if (AdmModel.getSenha().equals("")) {
            Resposta.setMensagem("A senha é obrigatória!");
            return new ResponseEntity<RespostaModel>(Resposta, HttpStatus.BAD_REQUEST);
        } else {
           if(acao.equals("cadastrar")){
             return new ResponseEntity<Admin>(AdminRepo.save(AdmModel), HttpStatus.CREATED);
        }else{
             return new ResponseEntity<Admin>(AdminRepo.save(AdmModel), HttpStatus.OK);
        }
        }
           }


           // METODO PARA DELETAR Admin
    public ResponseEntity<RespostaModel> deletar(Integer id_Admin){
    AdminRepo.deleteById(id_Admin);
    Resposta.setMensagem("Usuario foi removido!");
    return new ResponseEntity<RespostaModel>(Resposta,HttpStatus.OK);
}

    }



