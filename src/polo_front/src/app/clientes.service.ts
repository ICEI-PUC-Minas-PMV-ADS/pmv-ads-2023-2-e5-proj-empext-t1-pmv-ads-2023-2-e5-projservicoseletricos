import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from './clientes/cliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  apiURL: string = 'http://localhost:8080/api/user'

  constructor(private http: HttpClient) { }

  getAll() : Observable<any>{
    const tokenString = localStorage.getItem('access_token') || '{}'; 
    const token = JSON.parse(tokenString);
    const headers = {
      'Authorization' : 'Bearer ' + token.token
    }
    return this.http.get<Cliente[]>(this.apiURL, {headers});
  }

  getById(idUser: string) : Observable<any>{
    const tokenString = localStorage.getItem('access_token') || '{}'; 
    const token = JSON.parse(tokenString);
    const headers = {
      'Authorization' : 'Bearer ' + token.token
    }
    return this.http.get<Cliente[]>(this.apiURL + '/' + idUser, {headers});
  }

  adicionarOrcamento(idUser: string, idProduto: number): Observable<any>{
    const tokenString = localStorage.getItem('access_token') || '{}'; 
    const token = JSON.parse(tokenString);
    const headers = {
      'Authorization' : 'Bearer ' + token.token
    }
    return this.http.put<any>(this.apiURL + '/' + idUser + '/' + idProduto, null, {headers});
  }

  update(clienteEditado: Cliente) : Observable<any>{
    const tokenString = localStorage.getItem('access_token') || '{}'; 
    const token = JSON.parse(tokenString);
    const headers = {
      'Authorization' : 'Bearer ' + token.token
    }
    return this.http.put(this.apiURL + '/' + clienteEditado.id_user, clienteEditado, {headers});
  }

  delete(id: number) : Observable<any>{
    const tokenString = localStorage.getItem('access_token') || '{}'; 
    const token = JSON.parse(tokenString);
    const headers = {
      'Authorization' : 'Bearer ' + token.token
    }
    return this.http.delete(this.apiURL + '/' + id, {headers});
  }

}
