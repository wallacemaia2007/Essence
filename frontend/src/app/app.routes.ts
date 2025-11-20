import { Routes } from '@angular/router';
import { HomeComponent } from './features/home-component/home-component';
import { ProductsComponent } from './features/products-component/products-component';
import { CartComponent } from './features/cart-component/cart-component';
import { FavoritesComponent } from './features/favorites-component/favorites-component';
import { NewsComponent } from './features/news-component/news-component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'produtos', component: ProductsComponent },
  { path: 'carrinho', component: CartComponent },
  { path: 'favoritos', component: FavoritesComponent },
  { path: 'novidades', component: NewsComponent },
  { path: '**', redirectTo: '' },
];
