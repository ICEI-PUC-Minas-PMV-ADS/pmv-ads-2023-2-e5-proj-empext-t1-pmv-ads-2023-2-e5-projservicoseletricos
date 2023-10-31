import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  cadastrando: boolean;
  user: User = new User();
  successMessage: string = "";
  errorMessages: string[] = [];

  constructor(
    private router: Router,
    private authService: AuthService
    ){}

  onSubmit(){
    this.logar();
  }

  prepararCadastrar(event: any){
    event.preventDefault();
    this.user = new User();
    this.cadastrando = true;
  }

  cancelarCadastrar(event: any){
    event.preventDefault();
    this.user = new User();
    this.cadastrando = false;
    this.errorMessages = [];
    this.successMessage = "";
  }

  cadastrar(){
    this.authService.salvar(this.user)
      .subscribe({
        next: (response) => {
          this.successMessage = "Cadastro realizado com sucesso!";
          this.errorMessages = [];
          this.user = new User();
        },
        error: (errorResponse) => {
          this.successMessage = "";
          this.errorMessages = errorResponse.error.errors;
        }
      });
  }

  logar(){
    this.authService.login(this.user)
      .subscribe({
        next: (response) => {
          console.log(response);
          const access_token = JSON.stringify(response);
          localStorage.setItem("access_token", access_token);
          this.router.navigate(['/produtos']);
        },
        error: (errorResponse) => {
          console.log(errorResponse);
          this.successMessage = "";
          this.errorMessages = errorResponse.error.errors;
        }
      })
  }
}
