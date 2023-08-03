import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CrudService } from './crud.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService extends CrudService {

  private todo: Todo = {
    title: '',
    description : '',
    status: ''
  }

  protected override endpoint : string = 'tareas';


  // getTodos() : Observable<Todo[]> {
  //   const url = environment.apiUrl + 'tareas';
  //   return this.httpClient.get<Todo[]>(url);
  // }


  // newTodo(todo : Todo) : Observable<Todo> {
  //   const url = environment.apiUrl + 'tareas';
  //   return this.httpClient.post<Todo>(url,todo);
  // }

  setCurrent(todo: Todo) {
    this.todo = todo;

  }

  getCurrent(): Todo {
    return this.todo;
  }

  // getTodoById(id: string) : Observable<Todo> {
  //   const url: string = environment.apiUrl + 'tareas/'+id;
  //   return this.httpClient.get<Todo>(url); 
  // }
}
