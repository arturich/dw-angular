import { Component } from '@angular/core';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { Todo } from 'src/app/shared/models/todo';
import { SnackBarService } from 'src/app/shared/services/snack-bar.service';
import { TodoService } from 'src/app/shared/services/todo.service';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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

  form : FormGroup;

  constructor(private todoService : TodoService, 
      private snakBar : SnackBarService,
       // private dialogRef : MatDialogRef<NewTodoComponent>,
        formBuilder: FormBuilder, private router: Router
    ) {

      this.form  = formBuilder.group ({
        title : ['',[Validators.required, Validators.maxLength(75)]],
        description : ['',[Validators.required, Validators.maxLength(250)]],
        status : ['new']
      });

  }


  create() {
    
    if(this.form.valid) {
      const data : Todo = this.form.getRawValue();
      this.todoService.create(data).subscribe({

        next: () => {
          this.router.navigate(['..']);
        },
        error: () => {
          console.log("Something went wrong");
        }   
      })
    }
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
