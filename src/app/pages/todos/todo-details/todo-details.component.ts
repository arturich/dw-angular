import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from 'src/app/shared/models/todo';
import { TodoService } from 'src/app/shared/services/todo.service';


@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.scss']
})
export class TodoDetailsComponent implements OnInit {

  constructor(private todoService: TodoService, 
        private router: Router, 
        private activatedRoute : ActivatedRoute) {

    this.activatedRoute.params.subscribe((params: any) => {
      console.log('parametros', params);
      this.todoId = params['id'];
    })        
    this.todoService = todoService;
}
todoId : string = '';

  todo: Todo = { 

    title : "",
    description : "",
    status : ""
  }

  ngOnInit(): void {
    this.todo = this.todoService.getCurrent();

    if(this.todo._id !== this.todoId) {
      //this.router.navigate(['..']);

      this.todoService.getTodoById(this.todoId).subscribe({
          next: (response : Todo) => {
            this.todo = response;
          },
          error: () => {}
      })

    }
  }

}
