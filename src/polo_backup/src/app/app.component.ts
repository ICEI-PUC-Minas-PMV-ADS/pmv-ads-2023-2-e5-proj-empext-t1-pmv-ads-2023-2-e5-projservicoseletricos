import { Component } from '@angular/core';

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

  deslogar(){
    localStorage.clear();
    location.reload();
  }
}
