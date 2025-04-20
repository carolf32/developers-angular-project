import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login-form',
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent {
  loginForm = new FormGroup({
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
    password: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  constructor(private userService: UserService, private router: Router) {}

  onSubmit() {
    const data = {
      email: this.loginForm.get('email')?.value ?? '',
      password: this.loginForm.get('password')?.value ?? '',
    };

    this.userService.loginUser(data);
    this.router.navigateByUrl('');
    this.loginForm.reset();
  }
}
