import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user';
import { AuthService } from '../auth.service';
import { CepService } from '../cep.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  cadastrando: boolean;
  user: User = new User();
  successMessage: string = "";
  errorMessages: string[] = [];
  usuarioLogado: boolean = localStorage.getItem("access_token") != null;

  constructor(
    private router: Router,
    private authService: AuthService,
    private cepService: CepService
    ){}

  ngOnInit(): void {
    if (this.usuarioLogado){
      this.router.navigate(['/home']);
    }
  }

  onSubmit(){
    this.logar();
  }

  prepararCadastrar(event: any){
    event.preventDefault();
    this.errorMessages = [];
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
          localStorage.setItem("email", this.user.email);
          localStorage.setItem("role", response.roles[0]);
          localStorage.setItem("id", response.id);
          location.reload();
        },
        error: (errorResponse) => {
          console.log(errorResponse);
          this.successMessage = "";
          this.errorMessages = errorResponse.error.errors;
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
}
