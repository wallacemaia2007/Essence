import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/pages/home-component/home-component';
import { StoreComponent } from './features/store/pages/store-component/store-component';
import { CartComponent } from './features/cart-component/cart-component';
import { FavoritesComponent } from './features/favorites-component/favorites-component';
import { NewsComponent } from './features/news-component/news-component';
import { LoginComponent } from './features/login-component/login-component';
import { RegisterComponent } from './features/register-component/register-component';
import { OffersComponent } from './features/offers-component/offers-component';
import { ForgotPassword } from './features/login-component/forgot-password/forgot-password';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'loja', component: StoreComponent },
  { path: 'carrinho', component: CartComponent },
  { path: 'favoritos', component: FavoritesComponent },
  { path: 'novidades', component: NewsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'login/forgot-password', component: ForgotPassword },
  { path: 'register', component: RegisterComponent },
  { path: 'ofertas', component: OffersComponent },
  { path: '**', redirectTo: '' },
];
