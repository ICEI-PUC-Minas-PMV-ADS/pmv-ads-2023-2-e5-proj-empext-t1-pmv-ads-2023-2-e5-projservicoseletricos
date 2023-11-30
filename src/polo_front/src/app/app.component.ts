import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'polo';
  contato = 'contato@polo.com.br'
  usuarioLogado: boolean = localStorage.getItem("access_token") != null;
  email: string = localStorage.getItem("email") || "";
  userRole: string = localStorage.getItem("role") || "";
  mostrarCarrinho: boolean;

  constructor(private router: Router){
    this.mostrarCarrinho = false;
  }

  deslogar(){
    localStorage.clear();
    location.reload();
  }

  navegarHome(){
    this.router.navigate(['/home'])
    this.esconderCarrinho();
  }

  navegarProduto(){
    this.router.navigate(['/produtos'])
    this.mostrarIconeCarrinho();
  }

  navegarClientes(){
    this.router.navigate(['/clientes'])
    this.esconderCarrinho();
  }

  mostrarIconeCarrinho(){
    this.mostrarCarrinho = true;
  }

  esconderCarrinho(){
    this.mostrarCarrinho = false;
  }
}
