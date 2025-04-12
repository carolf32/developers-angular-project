import { Component } from '@angular/core';
import { HerosectionComponent } from '../../components/sections/herosection/herosection.component';
import { CtasectionComponent } from '../../components/sections/ctasection/ctasection.component';
import { DevsectionComponent } from '../../components/sections/devsection/devsection.component';

@Component({
  selector: 'app-homepage',
  imports: [HerosectionComponent, CtasectionComponent, DevsectionComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
})
export class HomepageComponent {}
