import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Credentials } from '../models/credentials';
import { Token } from '../models/token';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  login(credentials : Credentials) : Observable<Token> {

    const url : string = `${environment.apiUrl}auth`;
    return this.httpClient.post<Token>(url,credentials);

  }
}