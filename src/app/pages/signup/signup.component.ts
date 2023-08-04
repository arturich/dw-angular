import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user';
import { SignupService } from 'src/app/shared/services/signup.service';
import { SnackBarService } from 'src/app/shared/services/snack-bar.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  form: FormGroup;

  constructor(formBuilder: FormBuilder, private signupService: SignupService, private snack : SnackBarService, private router : Router) {

    this.form = formBuilder.group({
        name: ["",[Validators.required, Validators.minLength(2)]],
        email: ["",[Validators.required, Validators.email]],
        course:['',[Validators.required, Validators.minLength(6), Validators.maxLength(10)]],
        password:['',[Validators.required, Validators.minLength(8)]],
        confirm:['',[Validators.required, Validators.minLength(8)]],
        terms:[false,[Validators.requiredTrue]]
    }, {
      validators: [this.passwordMatch.bind(this)]
    });
  }

  signup() {
 
    if(this.form.valid) {

      const data : User = this.form.getRawValue();
      this.signupService.signup(data).subscribe({
        next:() => {
          this.snack.open("Exito");
          this.router.navigate(['/login']);
        },
        error:() => {
          this.snack.open("Something fail! Try again")
        }
      });

      console.log("Datos correctos");
    } else {
      console.log(this.form);
    }
  }

  passwordMatch() {
    if(!this.form) return null;

    const datos = this.form.getRawValue();
    const { password, confirm } =  this.form.getRawValue();

    // const password = this.form.controls['password'].value;
    // const confirm = this.form.controls['confirm'].value;
    if (password === confirm) {
      return null;
    } else {
     return  { mismatch: {
        password,
        confirm
      }}
    }
  }

}
