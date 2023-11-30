import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from './categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  apiURL: string = 'http://localhost:8080/api/categorias'

  constructor(private http: HttpClient) {

   }

  getAll() : Observable<any>{
    return this.http.get<Categoria[]>(this.apiURL);
  }

  getById(idCategoria: number) : Observable<any>{
    return this.http.get<Categoria>(this.apiURL + '/' + idCategoria);
  }

  create(categoria: Categoria) : Observable<any>{
    const tokenString = localStorage.getItem('access_token') || '{}'; 
    const token = JSON.parse(tokenString);
    const headers = {
      'Authorization' : 'Bearer ' + token.token
    }
    return this.http.post<any>(this.apiURL, categoria, { headers });
  }

  delete(categoriaId: number) : Observable<any>{
    const tokenString = localStorage.getItem('access_token') || '{}'; 
    const token = JSON.parse(tokenString);
    const headers = {
      'Authorization' : 'Bearer ' + token.token
    }
    return this.http.delete<any>(this.apiURL + '/' + categoriaId, { headers });
  }

}
