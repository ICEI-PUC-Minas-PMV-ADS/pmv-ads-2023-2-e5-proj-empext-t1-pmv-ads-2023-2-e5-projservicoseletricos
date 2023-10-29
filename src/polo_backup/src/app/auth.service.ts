import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './login/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiURL: string = "http://localhost:8080/auth"

  constructor(
    private http: HttpClient
  ) { }

  salvar(usuario: User) : Observable<any>{
    return this.http.post<any>(this.apiURL + '/register', usuario);
  }

  login(usuario: User) : Observable<any>{
    return this.http.post<any>(this.apiURL + '/login', usuario);
  }
}
