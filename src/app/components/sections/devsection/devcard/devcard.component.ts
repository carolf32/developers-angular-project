import { Component, Input } from '@angular/core';

interface IDev {
  name: string;
  description: string;
  imageUrl: string;
  role: string;
}

@Component({
  selector: 'app-devcard',
  imports: [],
  templateUrl: './devcard.component.html',
  styleUrl: './devcard.component.css',
})
export class DevcardComponent {
  @Input() dev!: IDev;
}
