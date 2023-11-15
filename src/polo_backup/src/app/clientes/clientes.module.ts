import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesListaComponent } from './clientes-lista/clientes-lista.component';
import { ClientesRoutingModule } from './clientes-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ClientesListaComponent
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
