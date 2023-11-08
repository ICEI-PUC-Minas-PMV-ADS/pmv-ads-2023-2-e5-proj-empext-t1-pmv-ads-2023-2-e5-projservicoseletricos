import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicosListaComponent } from './servicos-lista/servicos-lista.component';
import { ServicoComponent } from './servico/servico.component';
import { ServicoFormComponent } from './servico-form/servico-form.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ServicosListaComponent,
    ServicoComponent,
    ServicoFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ServicosListaComponent,
    ServicoComponent
  ]
})
export class ServicosModule { }
