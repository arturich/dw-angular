import { Component, OnInit } from '@angular/core';

import { Todo } from 'src/app/shared/models/todo'
import { SnackBarService } from 'src/app/shared/services/snack-bar.service';
import { TodoService } from 'src/app/shared/services/todo.service';



@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos: Todo[] = [];
  error : boolean = false;

  constructor(private todoService: TodoService, private snackBar : SnackBarService) {
      this.todoService = todoService;
  }

  ngOnInit(): void {     
    this.getTodos();    
  }

  getTodos() {
    this.todoService.getTodos().subscribe( {
      next:(response: Todo[]) => {
        this.todos = response;
        this.error = false;
        this.snackBar.open(
          `Se encontraron ${response.length} tareas`,
          )
      },
      error: (err:any) => {
        this.error = true;
        this.snackBar.open(
          "Ocurrio un error",
          )
      }
    }
    )
  }


}
