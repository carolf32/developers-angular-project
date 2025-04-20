import { Component, signal } from '@angular/core';
import { RegisterFormComponent } from '../../components/register-form/register-form.component';
import { LoginFormComponent } from '../../components/login-form/login-form.component';
import { IUser } from '../../../interfaces/user.interface';

@Component({
  selector: 'app-register-and-login-page',
  imports: [RegisterFormComponent, LoginFormComponent],
  templateUrl: './register-and-login-page.component.html',
  styleUrl: './register-and-login-page.component.css',
})
export class RegisterAndLoginPageComponent {}
