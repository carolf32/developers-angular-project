import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-titlesection',
  imports: [],
  templateUrl: './titlesection.component.html',
  styleUrl: './titlesection.component.css',
})
export class TitlesectionComponent {
  @Input() title!: string;
}
