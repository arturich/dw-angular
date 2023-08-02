import { Component } from '@angular/core';
import { Credentials } from 'src/app/shared/models/credentials';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

credentials: Credentials = {
  email: '',
  password: ''
}

  login(){
    console.log("Send data", this.credentials);
   
  } 

  cancel(e: MouseEvent) {
    e.preventDefault();
  }

}
