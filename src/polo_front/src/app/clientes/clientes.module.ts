import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesListaComponent } from './clientes-lista/clientes-lista.component';
import { ClientesRoutingModule } from './clientes-routing.module';
import { FormsModule } from '@angular/forms';
import { AreaClienteComponent } from './area-cliente/area-cliente.component';



@NgModule({
  declarations: [
    ClientesListaComponent,
    AreaClienteComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    FormsModule
  ],
  exports: [
    ClientesListaComponent
  ]
})
export class ClientesModule { }
