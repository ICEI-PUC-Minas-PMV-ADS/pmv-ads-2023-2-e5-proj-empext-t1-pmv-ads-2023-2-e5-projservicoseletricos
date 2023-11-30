import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Servico } from '../servico';
import { ServicosService } from 'src/app/servicos.service';

@Component({
  selector: 'app-servico',
  templateUrl: './servico.component.html',
  styleUrls: ['./servico.component.css']
})
export class ServicoComponent {
  @Input() servico: Servico; 
  @Output() servicoExcluido = new EventEmitter<string>();
  @Output() erroAoExcluir = new EventEmitter<string>();
  @Output() servicoEditado = new EventEmitter<string>();

  usuarioLogado: boolean = localStorage.getItem("access_token") != null;
  userRole: string = localStorage.getItem("role") || "";


  constructor(
    private service: ServicosService
  ){}

  excluirServico(){
    this.service.delete(this.servico.idServico).subscribe({
      next: response => {
        this.servicoExcluido.emit(this.servico.nome + " excluído com sucesso!");
      },
      error: errorResponse => {
        this.erroAoExcluir.emit("Erro inesperado ao tentar excluir " + this.servico.nome);
      }
    })
  }

  emitirMsgEditado(msg: string){
    this.servicoEditado.emit(msg);
  }

}
