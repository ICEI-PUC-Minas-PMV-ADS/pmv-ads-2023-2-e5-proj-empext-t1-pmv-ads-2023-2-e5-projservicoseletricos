import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Produto } from '../produto';
import { ProdutosService } from 'src/app/produtos.service';
import { CategoriasService } from 'src/app/categorias.service';
import { Categoria } from 'src/app/categoria';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.css']
})
export class ProdutoFormComponent implements OnInit {

  @Input() produto: Produto;
  @Output() editarProduto = new EventEmitter<Produto>();
  @Output() enviarMsgSucesso = new EventEmitter<string>();
  @Output() enviarMsgErro = new EventEmitter<string>();
  produtoAtualizado: Produto;
  cadastrando: boolean;
  categorias: Categoria[];

  constructor(
    private service: ProdutosService,
    private categoriaService: CategoriasService
  ) { }

  ngOnInit(): void {
    if (this.produto == null) {
      this.produto = new Produto();
      this.cadastrando = true;
    } 
    this.categoriaService.getAll().subscribe({
      next: response => {
        this.categorias = response;
      }
    })

  }

  editar() {
    this.produtoAtualizado = this.produto;
    this.editarProduto.emit(this.produtoAtualizado);
  }

  cadastrar() {
    this.service.create(this.produto)
      .subscribe({
        next: response => {
          this.enviarMsgSucesso.emit(this.produto.nome + " cadastrado com sucesso!");
        },
        error: erroResponse => {
          this.enviarMsgErro.emit("Erro inesperado ao cadastrar produto");
        }
      })
  }

  limparFormulario(){
    this.produto = new Produto();
  }

}
