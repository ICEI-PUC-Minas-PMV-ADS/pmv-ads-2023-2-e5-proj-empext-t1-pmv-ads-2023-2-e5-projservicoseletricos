import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdutosModule } from './produtos/produtos.module';
import { ProdutosService } from './produtos.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ServicosModule } from './servicos/servicos.module';
import { CategoriasService } from './categorias.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProdutosModule,
    HttpClientModule,
    FormsModule,
    ServicosModule
  ],
  providers: [
    ProdutosService,
    AuthService,
    CategoriasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
