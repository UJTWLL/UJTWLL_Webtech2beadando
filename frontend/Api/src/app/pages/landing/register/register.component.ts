import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/domain/auth/user.service';
import { UserDTO } from 'src/app/services/domain/auth/user/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    password: new FormControl('', [Validators.required, Validators.maxLength(20)]),
  });
  // tslint:disable-next-line:variable-name
  newUser: UserDTO;
  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }
  register() {

    this.newUser = {
      username: this.registerGroup.get('username').value,
      password: this.registerGroup.get('password').value,
    };
    this.authService.register(this.newUser.username, this.newUser.password).subscribe((res) => {
      console.log(res);

      if (res == null) {
        this.registerGroup.reset();
      } else {
        sessionStorage.clear();
        sessionStorage.setItem('currentUser', this.newUser.username);
        this.router.navigate(['login']);
      }

    });

  }
  navigateBack() {
    this.router.navigate(['../']);
  }
  navigateLogin() {
    this.router.navigate(['login']);
  }
}
