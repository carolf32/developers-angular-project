import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-titlesection',
  imports: [CommonModule],
  templateUrl: './titlesection.component.html',
  styleUrl: './titlesection.component.css',
})
export class TitlesectionComponent {
  @Input() title!: string;
  @Input() devIdNumber!: number;
}
