import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CepService } from 'src/app/cep.service';
import { ClientesService } from 'src/app/clientes.service';
import { User } from 'src/app/login/user';

@Component({
  selector: 'app-area-cliente',
  templateUrl: './area-cliente.component.html',
  styleUrls: ['./area-cliente.component.css']
})
export class AreaClienteComponent implements OnInit {

  user: User;
  userId: string = localStorage.getItem("id") || "";
  errorMessages: string[];
  successMessage: string;

  constructor(
    private cepService: CepService,
    private service: ClientesService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.service.getById(this.userId).subscribe({
      next: response => {
        this.user = response;
        this.successMessage = '';
        this.errorMessages = [];
      },
      error: errorResponse => {
        this.deslogar();
      }
    })
  }

  buscarCep(){
    this.cepService.buscarCep(this.user.cep).subscribe({
      next: response => {
        this.user.logradouro = response.logradouro;
        this.user.bairro = response.bairro;  
      }
    })
  }

  onSubmit(){
    // this.service.update(this.user).subscribe({
    //   next: response => {
    //     this.successMessage = 'Dados atualizados com sucesso!';
    //     this.errorMessages = [];
    //   },
    //   error: errorMessage => {
    //     this.successMessage = '';
    //     this.errorMessages.push('Erro inesperado');
    //   }
    // })
    window.alert('Ops! Estamos passando por manutenção.');
  }

  deslogar(){
    this.router.navigate(['/home']);
    localStorage.clear();
  }

  excluir(){
    // this.service.delete(this.user.id_user).subscribe({
    //   next: response => {
    //     this.deslogar();
    //   },
    //   error: errorResponse => {
    //     this.errorMessages.push('Erro inesperado');
    //   }
    // })
    window.alert('Ops! Estamos passando por manutenção.');
  }

}
