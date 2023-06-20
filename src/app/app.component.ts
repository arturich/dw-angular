import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  nombre: string  = "Arturo Reyex";

  cargando : boolean = false

  color : string = 'red';

  cambios : number = 0;

  tareas: string[] = [];
  //tareas: Array<string> = [];



  constructor() {

    this.cargando = true;

    setTimeout(() => {
      this.nombre   = "Pedro";
      this.cargando = false;      
      this.tareas   = ['tarea1','tarea2','tarea3'];
    },3000);
  }

  cambiarColor() {
    this.color = this.color === 'red' ? 'blue' : 'red';
    this.cambios++;
  }
}
