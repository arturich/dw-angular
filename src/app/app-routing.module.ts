import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './pages/home/home.component';
import { TodosComponent } from './pages/todos/todos.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { NewTodoComponent } from './pages/todos/new-todo/new-todo.component';
import { TodoListComponent } from './pages/todos/todo-list/todo-list.component';
import { TodoDetailsComponent } from './pages/todos/todo-details/todo-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  //{ path: '', redirectTo: 'todos', pathMatch: 'full'},
  //{ path: '', redirectTo: 'todos', pathMatch: 'prefix'}, //para rutas hijas
  { path:'todos', component: TodosComponent, children: [

      {path: '', component: TodoListComponent},
      {path: 'new', component : NewTodoComponent},
      {path: 'list', component : TodoListComponent},
      {path: ':id', component : TodoDetailsComponent},
  ]},
  //{ path:'todos/new', component: NewTodoComponent},
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }