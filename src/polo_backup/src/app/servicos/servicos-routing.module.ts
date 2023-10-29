import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicosListaComponent } from './servicos-lista/servicos-lista.component';


const routes: Routes = [
  { path: 'servicos', component: ServicosListaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }
