import { Component } from '@angular/core';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { Todo } from 'src/app/shared/models/todo';
import { SnackBarService } from 'src/app/shared/services/snack-bar.service';
import { TodoService } from 'src/app/shared/services/todo.service';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.scss']
})
export class NewTodoComponent {

  appereance: MatFormFieldAppearance = "fill";
  valor : string = "";

  todo : Todo  = {
    title : '',
    description : '',
    status : ""

  }

  constructor(private todoService : TodoService, 
      private snakBar : SnackBarService,
        private dialogRef : MatDialogRef<NewTodoComponent>
    ) {

  }


  create() {
    if( !this.todo.title || !this.todo.description || !this.todo.status) return;

    // this.todoService.newTodo(this.todo).subscribe({

    //   next: (response : Todo) => {
    //       this.snakBar.open(`Task  "${response._id}" created successfully `)
    //       //this.router.navigate(['todos'])
    //       this.dialogRef.close(true);
    //   },
    //   error: () => {
    //     this.snakBar.open(`Opps something failed `)
    //   }
    // });

  }

}
