import { Injectable } from '@angular/core';
import { Produto } from './produtos/produto';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  apiURL: string = 'http://localhost:8080/api/produtos'

  constructor(private http: HttpClient) { }

  getAll() : Observable<any>{
    return this.http.get<Produto[]>(this.apiURL);
  }

  delete(id: number) : Observable<any>{
    const tokenString = localStorage.getItem('access_token') || '{}'; 
    const token = JSON.parse(tokenString);
    const headers = {
      'Authorization' : 'Bearer ' + token.token
    }
    return this.http.delete(this.apiURL + '/' + id, {headers});
  }

  update(produtoEditado: Produto) : Observable<any>{
    const tokenString = localStorage.getItem('access_token') || '{}'; 
    const token = JSON.parse(tokenString);
    const headers = {
      'Authorization' : 'Bearer ' + token.token
    }
    return this.http.put(this.apiURL + '/' + produtoEditado.idProduto, produtoEditado, {headers});
  }

  create(produto: Produto) : Observable<any>{
    const tokenString = localStorage.getItem('access_token') || '{}'; 
    const token = JSON.parse(tokenString);
    const headers = {
      'Authorization' : 'Bearer ' + token.token
    }
    return this.http.post(this.apiURL, produto, {headers});
  }

  filtrarPorCategoria(idCategoria: number) : Observable<any>{
    return this.http.get(this.apiURL + '/filtrar/' + idCategoria);
  }
}
