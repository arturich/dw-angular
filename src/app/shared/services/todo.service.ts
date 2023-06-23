import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private httpClient: HttpClient) { }
  getTodos() : Observable<Todo[]> {
    const url = environment.apiUrl + 'tareas';
    return this.httpClient.get<Todo[]>(url);
  }
}
