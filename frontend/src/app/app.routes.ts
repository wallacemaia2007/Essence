import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/pages/home-component/home-component';
import { StoreComponent } from './features/store/pages/store-component/store-component';
import { CartComponent } from './features/cart-component/cart-component';
import { FavoritesComponent } from './features/favorites-component/favorites-component';
import { NewsComponent } from './features/news-component/news-component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'loja', component: StoreComponent },
  { path: 'carrinho', component: CartComponent },
  { path: 'favoritos', component: FavoritesComponent },
  { path: 'novidades', component: NewsComponent },
  { path: '**', redirectTo: '' },
];
