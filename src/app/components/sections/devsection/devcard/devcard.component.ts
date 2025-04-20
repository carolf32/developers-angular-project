import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IDev } from '../../../../../interfaces/dev.interface';

@Component({
  selector: 'app-devcard',
  imports: [RouterLink],
  templateUrl: './devcard.component.html',
  styleUrl: './devcard.component.css',
})
export class DevcardComponent {
  @Input() dev!: IDev;
}
