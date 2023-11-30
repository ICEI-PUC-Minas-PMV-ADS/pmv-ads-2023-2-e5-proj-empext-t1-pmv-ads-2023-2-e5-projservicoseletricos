import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Servico } from '../servico';
import { ServicosService } from 'src/app/servicos.service';

@Component({
  selector: 'app-servico-form',
  templateUrl: './servico-form.component.html',
  styleUrls: ['./servico-form.component.css']
})
export class ServicoFormComponent implements OnInit {
  @Input() servico: Servico;
  @Output() servicoAtualizado = new EventEmitter<string>();
  @Output() servicoCadastrado = new EventEmitter<string>();
  cadastrando : boolean;

  constructor(private service: ServicosService){

  }

  ngOnInit(): void {
    if (this.servico == null){
      this.servico = new Servico();
      this.cadastrando = true;
    } else {
      this.cadastrando = false;
    }
  }

  editar(){
    this.service.update(this.servico).subscribe({
      next: response => {
        this.servicoAtualizado.emit(this.servico.nome + " atualizado com sucesso");
      }
    })
  }

  cadastrar(){
    this.service.create(this.servico).subscribe({
      next: response => {
        this.servicoCadastrado.emit(this.servico.nome + " cadastrado com sucesso");
      }
    })
  }

  limparFormulario(){
    this.servico = new Servico();
  }

}
