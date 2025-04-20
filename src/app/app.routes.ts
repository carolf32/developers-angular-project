import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ContactpageComponent } from './pages/contactpage/contactpage.component';
import { RegisterAndLoginPageComponent } from './pages/register-and-login-page/register-and-login-page.component';
import { DevsComponent } from './pages/devs/devs.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'contact', component: ContactpageComponent },
  { path: 'enter', component: RegisterAndLoginPageComponent },
  {
    path: 'devs/:devId',
    component: DevsComponent,
    data: {
      renderMode: 'ssr',
    },
  },
];
