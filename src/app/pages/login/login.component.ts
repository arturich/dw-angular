import { Component } from '@angular/core';
import { Credentials } from 'src/app/shared/models/credentials';
import { Token } from 'src/app/shared/models/token';
import { AuthService } from 'src/app/shared/services/auth.service';
import { LoginService } from 'src/app/shared/services/login.service';
import { SnackBarService } from 'src/app/shared/services/snack-bar.service';

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

inputType : string = 'password';

constructor(private loginService : LoginService, private snackBar : SnackBarService, private authService : AuthService) {

}

  login(){
    console.log("Send data", this.credentials);   
    if(this.credentials.email && this.credentials.password) {
      this.loginService.login(this.credentials).subscribe({
        next: (response: Token) => {
          console.log("Correct credentials", response);
          //localStorage.setItem("token",response.token);
          this.authService.save(response.token);
        },
        error: () => {
          this.snackBar.open("Invalid User Name/Password");
        }
      })
    }
  } 

  cancel(e: MouseEvent) {
    e.preventDefault();
  }

  togglePassword() {
    this.inputType = this.inputType === 'password' ? 'text' : 'password';
    
  }

}
