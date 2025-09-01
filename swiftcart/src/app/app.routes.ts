import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Singlepage } from './common/singlepage/singlepage';
import { About } from './pages/about/about';
import { Payment } from './common/payment/payment';
import { Cart } from './common/cart/cart';




export const routes: Routes = [
    {
        path: '',
        component:Home
    },
     { path: 'singlepage/:id', component: Singlepage },
     {
        path: 'about',component:About
     },
     {
        path:'payment',component:Payment
     },
     {
      path:'cart',component:Cart
     }
     


];
