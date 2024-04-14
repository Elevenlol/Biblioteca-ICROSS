import { Component, OnInit } from '@angular/core';
import { LoginFormComponent } from '../../components/login-form/login-form.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserService } from 'app/services/user.services';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
  ],
})
export class LoginComponent implements OnInit {
  formLog: FormGroup;

  constructor(private userService: UserService, private router: Router) {
    this.formLog = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    this.userService
      .login(this.formLog.value)
      .then((response) => {
        this.router.navigate(['dashboard']);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  onClick() {
    this.userService
      .loginWithGoogle()
      .then((response) => {
        console.log(response);
        this.router.navigate(['dashboard']);
      })
      .catch((error) => console.log(error));
  }

  /* 
export class LoginComponent {
  loginObj: Login;
  constructor() {
    this.loginObj = new Login();
  }
}

export class Login {
  Emailid: string;
  Password: string;
  constructor() {
    this.Emailid = '';
    this.Password = '';
  } */
}
