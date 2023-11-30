import { Component } from '@angular/core';
import { Cliente } from '../cliente';
import { ClientesService } from 'src/app/clientes.service';

@Component({
  selector: 'app-clientes-lista',
  templateUrl: './clientes-lista.component.html',
  styleUrls: ['./clientes-lista.component.css']
})
export class ClientesListaComponent {

  clientes: Cliente[];
  clientesFiltrados: Cliente[];
  accordionOpenState: { [key: number]: boolean } = {};
  nomeFiltro: string;

  constructor(private service: ClientesService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe({
      next: response => {
        this.clientes = response;
        this.clientesFiltrados = response;
        console.log(this.clientes);
      },
      error: errorResponse => {
        console.log(errorResponse)
      }
    })
  }

  filtrar(){
    if (this.nomeFiltro == "") {
      this.clientesFiltrados = this.clientes;
    }
    this.clientesFiltrados = this.clientes.filter(cliente => cliente.nome.toUpperCase().indexOf(this.nomeFiltro.toUpperCase()) != -1 || cliente.sobrenome.toUpperCase().indexOf(this.nomeFiltro.toUpperCase()) != -1);
    console.log(this.nomeFiltro)
    console.log(this.clientesFiltrados);
  }
}
