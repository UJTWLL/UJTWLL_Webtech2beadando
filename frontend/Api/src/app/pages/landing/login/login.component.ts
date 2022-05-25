import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CurrentUserService } from 'src/app/services/domain/auth/current-user/current-user.service';
import { AuthService } from 'src/app/services/domain/auth/user.service';
import { UserDTO } from 'src/app/services/domain/auth/user/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    password: new FormControl('', [Validators.required, Validators.maxLength(20)]),
  });
  user: UserDTO;
  constructor(
    private authService: AuthService,
    private router: Router,
    private currentUserService: CurrentUserService,

  ) { }

  ngOnInit(): void {
  }
  login() {

    this.user = {
      username: this.loginGroup.get('username').value,
      password: this.loginGroup.get('password').value,
    };
    this.authService.login(this.user.username, this.user.password).subscribe((res) => {
      if (res == null) {
        this.loginGroup.reset();
      } else {
        sessionStorage.clear();
        this.currentUserService.create({ username: this.user.username, role: 1 });
        this.router.navigate(['car', 'cars']);
      }

    });

  }
  navigateBack() {
    this.router.navigate(['../']);
  }
  navigateRegister() {
    this.router.navigate(['register']);
  }
}
