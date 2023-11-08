import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Servico } from './servicos/servico';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicosService {

  apiURL: string = 'http://localhost:8080/api/servicos'

  constructor(private http: HttpClient) { }

  getAll() : Observable<any>{
    return this.http.get<Servico[]>(this.apiURL);
  }

  delete(id: number) : Observable<any>{
    const tokenString = localStorage.getItem('access_token') || '{}'; 
    const token = JSON.parse(tokenString);
    const headers = {
      'Authorization' : 'Bearer ' + token.token
    }
    return this.http.delete(this.apiURL + '/' + id, {headers});
  }

  create(servico : Servico) : Observable<any>{
    const tokenString = localStorage.getItem('access_token') || '{}'; 
    const token = JSON.parse(tokenString);
    const headers = {
      'Authorization' : 'Bearer ' + token.token
    }
    return this.http.post(this.apiURL, servico, {headers});
  }

  update(servico : Servico) : Observable<any>{
    const tokenString = localStorage.getItem('access_token') || '{}'; 
    const token = JSON.parse(tokenString);
    const headers = {
      'Authorization' : 'Bearer ' + token.token
    }
    return this.http.put(this.apiURL + '/' + servico.idServico, servico, {headers});
  }
}
