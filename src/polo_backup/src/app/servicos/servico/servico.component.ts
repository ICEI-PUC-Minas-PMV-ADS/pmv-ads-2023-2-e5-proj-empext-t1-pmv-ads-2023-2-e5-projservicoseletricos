import { Component, Input } from '@angular/core';
import { Servico } from '../servico';

@Component({
  selector: 'app-servico',
  templateUrl: './servico.component.html',
  styleUrls: ['./servico.component.css']
})
export class ServicoComponent {
  @Input() servico: Servico; 
}
