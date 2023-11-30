import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicosListaComponent } from './servicos-lista/servicos-lista.component';
import { ServicoComponent } from './servico/servico.component';
import { ServicoFormComponent } from './servico-form/servico-form.component';
import { FormsModule } from '@angular/forms';
import { ServicosRoutingModule } from './servicos-routing.module';



@NgModule({
  declarations: [
    ServicosListaComponent,
    ServicoComponent,
    ServicoFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ServicosRoutingModule
  ],
  exports: [
    ServicosListaComponent,
    ServicoComponent
  ]
})
export class ServicosModule { }
