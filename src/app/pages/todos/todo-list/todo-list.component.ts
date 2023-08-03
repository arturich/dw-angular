import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/shared/models/todo'
import { SnackBarService } from 'src/app/shared/services/snack-bar.service';
import { TodoService } from 'src/app/shared/services/todo.service';

import { MatDialog } from '@angular/material/dialog';
import { NewTodoComponent } from 'src/app/pages/todos/new-todo/new-todo.component';
import { DataTableColumn } from 'src/app/modules/data-table/models/data-table-column';
import { SpinnerService } from 'src/app/modules/spinner/services/spinner.service';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})

export class TodoListComponent implements OnInit  {  
  todos: Todo[] = [];
  error : boolean = false;
  columns: DataTableColumn[] = [
    { title: 'Title', propertyName : 'title'},
    { title: 'Description', propertyName : 'description'},
    { title: 'Status', propertyName : 'status'},
    { title: 'Creation Date', propertyName : 'createdAt'},

  ]

  constructor(private todoService: TodoService, 
    private snackBar : SnackBarService, 
      private matDialog : MatDialog,
      private spinner : SpinnerService
      ) {
    this.todoService = todoService; 
}
  
  getTodos() {
    this.spinner.loading(true);
    this.todoService.getItems().subscribe( {
      next:(response: Todo[]) => {
        this.todos = response;
        this.error = false;
        this.snackBar.open(
          `Se encontraron ${response.length} tareas`,
          )
          this.spinner.loading(false);
      },
      error: (err:any) => {
        this.error = true;
        this.snackBar.open(
          "Ocurrio un error",
          )
          this.spinner.loading(false);  
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
    console.log("metodo que se manda a llamar",todo);
    this.todoService.setCurrent(todo);
  
  }

  ngOnInit(): void {     
    this.getTodos();    
  }


}