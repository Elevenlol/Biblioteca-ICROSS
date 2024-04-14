import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'app/services/user.services';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) {}
  ngOnInit(): void {}
  onClick() {
    this.userService
      .logout()
      .then(() => {
        this.router.navigate(['login']);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
