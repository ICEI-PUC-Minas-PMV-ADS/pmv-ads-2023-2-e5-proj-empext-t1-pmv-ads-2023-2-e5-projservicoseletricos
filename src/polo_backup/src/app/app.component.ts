import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'polo';
  usuarioLogado: boolean = localStorage.getItem("access_token") != null;

  deslogar(){
    localStorage.clear();
  }
}
