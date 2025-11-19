import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-component',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './header-component.html',
  styleUrl: './header-component.scss',
})
export class HeaderComponent {

  constructor(private router: Router) {}

  categories = [
    { name: 'Novidades', link: '/novidades' },
    { name: 'Vestidos', link: '/vestidos' },
    { name: 'Tops', link: '/tops' },
    { name: 'Croppeds', link: '/croppeds' },
    { name: 'Casacos', link: '/casacos' },
    { name: 'Acessórios', link: '/acessorios' },
    { name: 'Ofertas', link: '/ofertas' }
  ];

  cartItemCount = 1;

  onSearch() {
  }

  onFavorites() {
  }

  onCart() {
  }

  home() {
    this.router.navigate(['/']);
  }
}

