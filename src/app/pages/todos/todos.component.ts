import { Component } from '@angular/core';

import { Todo } from 'src/app/shared/models/todo'
import { TodoService } from 'src/app/shared/services/todo.service';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent {

  todos: Todo[] = [];


  constructor(todoService: TodoService) {
    setTimeout(() => {
      this.todos = todoService.getTodos();
    },1000)
  }

}
