import { AfterContentInit, Component, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { ProdutosService } from 'src/app/produtos.service';
import { CategoriasService } from 'src/app/categorias.service';
import { Categoria } from 'src/app/categoria';
import { ClientesService } from 'src/app/clientes.service';
import { Router } from '@angular/router';

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
  userRole: string = localStorage.getItem("role") || "";
  userId: string = localStorage.getItem("id") || "";

  carrinho: Produto[] = [];
  subtotal: number = 0;
  msgOrcamento = '';


  constructor(
    private service: ProdutosService,
    private categoriaService: CategoriasService,
    private clienteService: ClientesService,
    private router: Router
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
    if (produto.quantidade == null) produto.quantidade = 1;
    this.subtotal += produto.preco * produto.quantidade;
  }

  removerDoCarrinho(produto: Produto){
    this.carrinho = this.carrinho.filter(function( obj ) {
      return obj.idProduto !== produto.idProduto;
    });
    this.subtotal -= produto.preco * produto.quantidade;
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

  adicionarOrcamento(){
    if (this.usuarioLogado){
      this.carrinho.forEach(prod => {
        this.clienteService.adicionarOrcamento(this.userId, prod.idProduto).subscribe({
          next: (response) => {
            console.log(response);
          },
          error: errorResponse => {
            console.log(errorResponse);
          }
        })
      })
      this.montarMensagemOrcamento();
      window.open('https://wa.me/+5519995573590/?text=' + this.msgOrcamento);
    } else {
      alert('Ops! É preciso fazer o login antes!');
    }
  }

  montarMensagemOrcamento(){
    let listaProdutos = '';
    this.carrinho.forEach(prod => {
      listaProdutos += prod.nome + '\n';
    })
    this.msgOrcamento = 'Olá, gostaria de comprar os seguintes produtos: \n' + listaProdutos;
    this.msgOrcamento = encodeURIComponent(this.msgOrcamento);
  }
}
