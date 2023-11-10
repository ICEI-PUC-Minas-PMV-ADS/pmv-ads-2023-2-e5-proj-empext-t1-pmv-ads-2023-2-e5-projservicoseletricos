import { Component, OnInit } from '@angular/core';
import { ServicosService } from 'src/app/servicos.service';
import { Servico } from '../servico';

@Component({
  selector: 'app-servicos-lista',
  templateUrl: './servicos-lista.component.html',
  styleUrls: ['./servicos-lista.component.css']
})
export class ServicosListaComponent implements OnInit {
  servicos: Servico[];
  sucesso: boolean = false;
  sucessoMsg: string;
  erro: boolean = false;
  erroMsg: string;
  editMsg: string;
  edit: boolean = false;

  usuarioLogado: boolean = localStorage.getItem("access_token") != null;
  userRole: string = localStorage.getItem("role") || "";

  constructor(
    private service: ServicosService
  ){}

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.service.getAll()
      .subscribe(response => this.servicos = response);
  }

  exibirSucesso(msg: string){
    this.sucessoMsg = msg;
    this.sucesso = true;
    setTimeout(() => this.sucesso = false, 10000); 
    this.ngOnInit();
  }

  exibirErro(msg: string){
    this.erroMsg = msg;
    this.erro = true;
    setTimeout(() => this.erro = false, 10000);
    this.ngOnInit();
  }

  exibirEditar(msg: string){
    this.editMsg = msg;
    this.edit = true;
    setTimeout(() => this.edit = false, 10000);
    this.ngOnInit();
  }
}
