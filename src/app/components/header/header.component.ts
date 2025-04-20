import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(private userService: UserService) {}

  handleLogout() {
    this.userService.logoutUser();
  }

  get currentUser() {
    return this.userService.getUser();
  }
}
