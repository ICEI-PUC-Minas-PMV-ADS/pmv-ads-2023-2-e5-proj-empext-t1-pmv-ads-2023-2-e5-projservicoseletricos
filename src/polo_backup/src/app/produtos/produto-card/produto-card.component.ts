import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Produto } from '../produto';
import { ProdutosService } from 'src/app/produtos.service';

@Component({
  selector: 'app-produto-card',
  templateUrl: './produto-card.component.html',
  styleUrls: ['./produto-card.component.css']
})
export class ProdutoCardComponent implements OnInit {

  @Input() produto: Produto;
  @Output() successMessage = new EventEmitter<string>();
  @Output() errorMessage = new EventEmitter<string>();
  @Output() editMessage = new EventEmitter<string>();
  @Output() adicionarAoCarrinho = new EventEmitter<Produto>();
  @Output() removerDoCarrinho = new EventEmitter<Produto>();
  oculto: boolean;

  produtoNoCarrinho: boolean;

  produtoEditado: Produto;
  usuarioLogado: boolean = localStorage.getItem("access_token") != null;
  userRole: string = localStorage.getItem("role") || "";

  constructor(private service: ProdutosService){}

  ngOnInit(): void {
    this.oculto = true;
    this.produtoNoCarrinho = false;
  }

  deletar(){  
    this.service.delete(this.produto.idProduto)
      .subscribe({
        next: response => {
          this.successMessage.emit(this.produto.nome + " excluído com sucesso!")
          this.ngOnInit();
        },
        error: error => {
          this.errorMessage.emit("Erro inesperado ao excluir")
        }
      });
  }

  editar(produtoEditado: Produto){
    console.log(produtoEditado);
    this.service.update(produtoEditado)
    .subscribe({
      next: response => {
        this.editMessage.emit(produtoEditado.nome + " editado com sucesso!");
      },
      error: error => {
        this.errorMessage.emit("Erro inesperado ao editar")
      }
    })
  }

  abrir(event: any){
    event.preventDefault();
    this.oculto = false;
  }

  fechar(event: any){
    event.preventDefault();
    this.oculto = true;
  }

  addProduto(){
    this.adicionarAoCarrinho.emit(this.produto);
    this.produtoNoCarrinho = true;
  }

  removeProduto(){
    const confirm = window.confirm("Remover produto do carrinho?");

    if (confirm){
      this.removerDoCarrinho.emit(this.produto);
      this.produtoNoCarrinho = false;
    }
  }


}
