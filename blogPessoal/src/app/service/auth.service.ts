import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../model/User';
import { UserLogin } from '../model/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {

   }

  entrar(UserLogin: UserLogin): Observable<UserLogin>{
    return this.http.post<UserLogin>('https://padiblog.herokuapp.com/usuarios/logar', UserLogin)
  }

  cadastrar(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>('https://padiblog.herokuapp.com/usuarios/cadastrar', usuario)
  }

  logado() {
    let ok: boolean = false

    if (environment.token !=""){
        ok = true
    }

    return ok 
  }

}
