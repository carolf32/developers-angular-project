import { Component } from '@angular/core';
import { TitlesectionComponent } from '../../components/sections/titlesection/titlesection.component';
import { ContactsectionComponent } from '../../components/sections/contactsection/contactsection.component';

@Component({
  selector: 'app-contactpage',
  imports: [TitlesectionComponent, ContactsectionComponent],
  templateUrl: './contactpage.component.html',
  styleUrl: './contactpage.component.css',
})
export class ContactpageComponent {
  title = 'Contact Us';
}
