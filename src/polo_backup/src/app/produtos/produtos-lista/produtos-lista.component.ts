import { AfterContentInit, Component, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { ProdutosService } from 'src/app/produtos.service';
import { CategoriasService } from 'src/app/categorias.service';
import { Categoria } from 'src/app/categoria';

@Component({
  selector: 'app-produtos-lista',
  templateUrl: './produtos-lista.component.html',
  styleUrls: ['./produtos-lista.component.css']
})
export class ProdutosListaComponent implements OnInit{

  produtos: Produto[];
  categorias: Categoria[];
  sucesso: boolean = false;
  sucessoMsg: string;
  erro: boolean = false;
  erroMsg: string;
  editMsg: string;
  edit: boolean = false;
  usuarioLogado: boolean = localStorage.getItem("access_token") != null;

  carrinho: Produto[];


  constructor(
    private service: ProdutosService,
    private categoriaService: CategoriasService
  ){}

  ngOnInit(): void {
    this.service.getAll().subscribe({
      next: response => {
        this.produtos = response;
      },
      error: errorResponse => {
      }
    })

    this.categoriaService.getAll().subscribe({
      next: response => {
        this.categorias = response;
      }
    })

    this.carrinho = [];
  }

  exibirSucesso(msg: string){
    this.sucessoMsg = msg;
    this.sucesso = true;
    setTimeout(() => this.sucesso = false, 10000); // temporizador do alerta
    this.ngOnInit(); // recarrega a pag para trazer a lista de produtos atualizados
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

  adicionarAoCarrinho(produto: Produto){
    this.carrinho.push(produto);
    console.log(this.carrinho);
  }

  removerDoCarrinho(idProduto: number){
    this.carrinho = this.carrinho.filter(function( obj ) {
      return obj.idProduto !== idProduto;
    });
    console.log(this.carrinho);
  }

  filtrarPorCategoria(idCategoria: number){
    if (idCategoria == 0){
      this.ngOnInit();
    } else {
      this.service.filtrarPorCategoria(idCategoria).subscribe({
        next: response => {
          this.produtos = response;
        }
      })
    }
  }
}
