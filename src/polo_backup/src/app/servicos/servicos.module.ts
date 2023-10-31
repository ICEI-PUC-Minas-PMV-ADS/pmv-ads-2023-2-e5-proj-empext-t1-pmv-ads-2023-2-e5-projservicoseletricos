import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicosListaComponent } from './servicos-lista/servicos-lista.component';
import { ServicoComponent } from './servico/servico.component';



@NgModule({
  declarations: [
    ServicosListaComponent,
    ServicoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ServicosListaComponent,
    ServicoComponent
  ]
})
export class ServicosModule { }
