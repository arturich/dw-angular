import { Component } from '@angular/core';

interface Todo {
  title: string;
  description: string;
  status: string;
}


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent {

  todos: Todo[] = [];


  constructor() {
    setTimeout(() => {
      this.todos = [
        { title: 'Tarea1', description: 'lorem imposum', status: 'new' },
        { title: 'Tarea2', description: 'lorem imposum', status: 'new' },
        { title: 'Tarea3', description: 'lorem imposum', status: 'new' }
      ];
    },1000)
  }

}
