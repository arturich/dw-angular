import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { User } from '../models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private httpClient: HttpClient) { }

  signup(user: User): Observable<User> {
    const url: string = `${environment.apiUrl}signup`;
    return this.httpClient.post<User>(url,user);

  }
}
