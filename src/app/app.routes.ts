import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ContactpageComponent } from './pages/contactpage/contactpage.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'contact', component: ContactpageComponent },
];
