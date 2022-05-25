import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/domain/auth/user.service';
import { UserDTO } from 'src/app/services/domain/auth/user/user';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  registerGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    password: new FormControl('', [Validators.required, Validators.maxLength(20)]),
  });
  // tslint:disable-next-line:variable-name
  new_user: UserDTO;

  loginGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    password: new FormControl('', [Validators.required, Validators.maxLength(20)]),
  });
  user: UserDTO;
  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() { }

  login() {
    this.router.navigate(['login']);
  }
  register() {
    this.router.navigate(['register']);
  }


}
