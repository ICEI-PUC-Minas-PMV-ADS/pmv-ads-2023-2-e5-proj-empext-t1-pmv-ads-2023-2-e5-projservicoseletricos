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
}
