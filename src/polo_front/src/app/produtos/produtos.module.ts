import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosRoutingModule } from './produtos-routing.module';
import { ProdutosListaComponent } from './produtos-lista/produtos-lista.component';
import { ProdutoCardComponent } from './produto-card/produto-card.component';
import { ProdutoFormComponent } from './produto-form/produto-form.component';
import { FormsModule } from '@angular/forms';
import { CategoriaFormComponent } from './categoria-form/categoria-form.component';


@NgModule({
  declarations: [
    ProdutosListaComponent,
    ProdutoCardComponent,
    ProdutoFormComponent,
    CategoriaFormComponent
  ],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    FormsModule
  ],
  exports: [
    ProdutoCardComponent,
    ProdutosListaComponent
  ]
})
export class ProdutosModule { }