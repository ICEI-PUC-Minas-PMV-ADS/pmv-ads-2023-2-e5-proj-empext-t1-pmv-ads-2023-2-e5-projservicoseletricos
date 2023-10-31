import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { ProdutosService } from 'src/app/produtos.service';

@Component({
  selector: 'app-produtos-lista',
  templateUrl: './produtos-lista.component.html',
  styleUrls: ['./produtos-lista.component.css']
})
export class ProdutosListaComponent implements OnInit{

  produtos: Produto[];

  constructor(
    private service: ProdutosService
  ){}

  ngOnInit(): void {
    this.service.getAll().subscribe({
      next: response => {
        console.log(response);
        this.produtos = response;
      },
      error: errorResponse => {

      }
    })
  }

}
