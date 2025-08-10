import { Routes } from '@angular/router';
import { Home } from './pages/home/home'; 
import { Contact } from './pages/contact/contact';
import { Singlepage } from './pages/singlepage/singlepage';
import { About } from './pages/about/about';




export const routes: Routes = [

    {
    path: '',
    component: Home
  },
   {
    path: 'about',
    component:About
  },
   {
    path: 'contact',
    component: Contact
  },
 { path: 'singlepage/:id', component: Singlepage },


];