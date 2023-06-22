import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }
  getTodos() : Todo[] {
    return [
      {title:'tarea 1', description:'lorem',status:'new'},
      {title:'tarea 2', description:'lorem',status:'old'}
    ]
  }
}
