import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesListaComponent } from './clientes-lista/clientes-lista.component';
import { AreaClienteComponent } from './area-cliente/area-cliente.component';


const routes: Routes = [
  { path: 'clientes', component: ClientesListaComponent },
  { path: 'area-cliente', component: AreaClienteComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
