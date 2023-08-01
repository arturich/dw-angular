import { Component, OnInit } from '@angular/core';

import { Todo } from 'src/app/shared/models/todo'
import { SnackBarService } from 'src/app/shared/services/snack-bar.service';
import { TodoService } from 'src/app/shared/services/todo.service';

import { MatDialog } from '@angular/material/dialog';
import { NewTodoComponent } from '../new-todo/new-todo.component';



@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})

export class TodoListComponent implements OnInit {

  todos: Todo[] = [];
  error : boolean = false;

  displayedColumns : string[] = ["title",'description','status','created_at','details'];

  constructor(private todoService: TodoService, 
      private snackBar : SnackBarService, 
        private matDialog : MatDialog) {
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

  openNewTodo() {
    const dialogRef = this.matDialog.open(NewTodoComponent, {
      width:  '600px',
      height: 'auto'
    });

    dialogRef.afterClosed().subscribe((response) => {
       if(response) {
        this.getTodos();
       }
    })
  }

  setTodo(todo: Todo) {
    
  }

}
