import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosRoutingModule } from './produtos-routing.module';
import { ProdutosListaComponent } from './produtos-lista/produtos-lista.component';
import { ProdutoCardComponent } from './produto-card/produto-card.component';


@NgModule({
  declarations: [
    ProdutosListaComponent,
    ProdutoCardComponent
  ],
  imports: [
    CommonModule,
    ProdutosRoutingModule
  ],
  exports: [
    ProdutoCardComponent,
    ProdutosListaComponent
  ]
})
export class ProdutosModule { }
