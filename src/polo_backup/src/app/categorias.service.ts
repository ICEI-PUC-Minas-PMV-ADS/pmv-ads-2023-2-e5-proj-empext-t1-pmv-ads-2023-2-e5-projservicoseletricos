import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from './categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  apiURL: string = 'http://localhost:8080/api/categorias'

  constructor(private http: HttpClient) { }

  getAll() : Observable<any>{
    return this.http.get<Categoria[]>(this.apiURL);
  }

  getById(idCategoria: number) : Observable<any>{
    return this.http.get<Categoria>(this.apiURL + '/' + idCategoria);
  }
}
