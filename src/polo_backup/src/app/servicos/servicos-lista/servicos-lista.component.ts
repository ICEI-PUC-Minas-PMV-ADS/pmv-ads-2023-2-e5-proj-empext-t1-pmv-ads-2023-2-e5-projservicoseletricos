import { Component, OnInit } from '@angular/core';
import { ServicosService } from 'src/app/servicos.service';
import { Servico } from '../servico';

@Component({
  selector: 'app-servicos-lista',
  templateUrl: './servicos-lista.component.html',
  styleUrls: ['./servicos-lista.component.css']
})
export class ServicosListaComponent implements OnInit {
  servicos: Servico[];

  constructor(
    private service: ServicosService
  ){}

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.service.getAll()
      .subscribe(response => this.servicos = response);
  }
}
