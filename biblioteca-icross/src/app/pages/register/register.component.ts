import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router } from '@angular/router';
import { UserService } from 'app/services/user.services';
import { MAT_SNACK_BAR_DATA, MatSnackBar } from '@angular/material/snack-bar';
@Component({
  standalone: true,
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
    MatButtonModule,
  ],
})
export class RegisterComponent implements OnInit {
  formReg: FormGroup;

  constructor(
    private userService: UserService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {
    this.formReg = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    this.userService
      .register(this.formReg.value)
      .then((response) => {
        console.log(response);
        this.router.navigate(['/login']);
      })
      .catch((error) => console.log(error));
  }
  onClick() {
    this.userService
      .loginWithGoogle()
      .then((response) => {
        console.log(response);
        this.router.navigate(['dashboard']);
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          this.openSnackBar('El correo electrónico ya está en uso', 'Cerrar');
        }else if(error.code === "auth/weak-password"){
          console.error('La contraseña no es valida, necesita al menos 6 caracteres', error);
          this.openSnackBar('La contraseña no es valida, necesita al menos 6 caracteres', 'Cerrar');
        }

      });
  }
}
