import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DevcardComponent } from './devcard/devcard.component';

@Component({
  selector: 'app-devsection',
  imports: [CommonModule, DevcardComponent],
  templateUrl: './devsection.component.html',
  styleUrl: './devsection.component.css',
})
export class DevsectionComponent {
  developerList = [
    {
      name: 'Jane Smith',
      role: 'Backend Developer',
      imageUrl: 'dev1.jpg',
      description:
        'Jane is an experienced backend developer who specializes in building robust server-side applications.',
    },
    {
      name: 'John Doe',
      role: 'Frontend Developer',
      imageUrl: 'dev2.jpg',
      description:
        'John is a skilled frontend developer with a passion for creating beautiful and functional user interfaces.',
    },
    {
      name: 'Alice Johnson',
      role: 'Full Stack Developer',
      imageUrl: 'dev3.jpg',
      description:
        'Alice is a versatile full stack developer with expertise in both frontend and backend technologies.',
    },
    {
      name: 'Bob Brown',
      role: 'UI/UX Designer',
      imageUrl: 'dev4.jpg',
      description:
        'Bob is a talented UI/UX designer who focuses on creating user-friendly and visually appealing designs.',
    },
  ];
}
