import { Component, Input } from '@angular/core';
import { Produto } from '../produto';
import { ProdutosService } from 'src/app/produtos.service';

@Component({
  selector: 'app-produto-card',
  templateUrl: './produto-card.component.html',
  styleUrls: ['./produto-card.component.css']
})
export class ProdutoCardComponent {

  @Input() produto: Produto;

  usuarioLogado: boolean = localStorage.getItem("access_token") != null;

  constructor(private service: ProdutosService){}

  deletar(){

  }


}
