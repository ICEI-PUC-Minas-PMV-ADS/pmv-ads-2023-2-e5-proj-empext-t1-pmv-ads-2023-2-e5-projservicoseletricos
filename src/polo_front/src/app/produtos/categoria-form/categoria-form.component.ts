import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Categoria } from 'src/app/categoria';
import { CategoriasService } from 'src/app/categorias.service';

@Component({
  selector: 'app-categoria-form',
  templateUrl: './categoria-form.component.html',
  styleUrls: ['./categoria-form.component.css']
})
export class CategoriaFormComponent implements OnInit{

  categoria: Categoria;
  categorias: Categoria[];
  @Output() enviarMsgSucesso = new EventEmitter<string>();
  @Output() enviarMsgErro = new EventEmitter<string>();
  userRole: string = localStorage.getItem("role") || "";

  constructor(private service: CategoriasService){}
  ngOnInit(): void {
    this.categoria = new Categoria();

    this.service.getAll().subscribe({
      next: response => {
        this.categorias = response;
      }
    })
  }

  cadastrar() {
    this.service.create(this.categoria)
      .subscribe({
        next: response => {
          this.enviarMsgSucesso.emit(this.categoria.nome + " cadastrada com sucesso!");
          this.ngOnInit();
        },
        error: erroResponse => {
          this.enviarMsgErro.emit("Erro inesperado ao cadastrar produto");
        }
      })
  }

  deletar(categoria: Categoria){
    const confirmacao = window.confirm('Tem certeza de que deseja excluir ' + categoria.nome + '?');

    if (confirmacao){
      this.service.delete(categoria.idCategoria).subscribe({
        next: response => {
          this.enviarMsgSucesso.emit(categoria.nome + " excluída com sucesso!");
          this.ngOnInit();
        },
        error: erroResponse => {
          this.enviarMsgErro.emit("Erro inesperado ao cadastrar produto");
        }
      })
    } 
    
  }

}
