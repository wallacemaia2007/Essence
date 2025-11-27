import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DrawerService } from '../../../core/services/drawer-service';
import { CategoriesTypes } from '../../../core/types/categories-types';
import { StroreService } from '../../../features/store/services/store-service';

@Component({
  selector: 'app-header-component',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './header-component.html',
  styleUrl: './header-component.scss',
})
export class HeaderComponent {
  constructor(
    private router: Router,
    private drawerService: DrawerService,
    private storeService: StroreService,
  ) {}

  categories = [
    CategoriesTypes.VESTIDOS,
    CategoriesTypes.ACESSORIOS,
    CategoriesTypes.CROPPEDS,
    CategoriesTypes.CAMISETAS,
    CategoriesTypes.CALCAS,
    CategoriesTypes.SAIAS,
    CategoriesTypes.BODYS,
    CategoriesTypes.CALCADOS,
  ];

  cartItemCount = 1;

  isSearchOpen = true;
  searchQuery = '';
  searchResults: any[] = [];

  toggleSearch() {
    this.isSearchOpen = !this.isSearchOpen;
    if (!this.isSearchOpen) {
      this.searchQuery = '';
      this.searchResults = [];
    }
  }

  onSearchInput(value: string) {
    this.searchQuery = value;
    const query = value.trim().toLowerCase();
    if (!query) {
      this.searchResults = [];
      return;
    }
    this.storeService.getAllProducts().subscribe((products) => {
      this.searchResults = products
        .filter((p) => p.name.toLowerCase().startsWith(query))
        .slice(0, 3);
    });
  }

  onSelectResult(product: any) {
    this.router.navigate(['/loja', product.id]);

  }

  onFavorites() {
    this.router.navigate(['/favoritos']);
  }

  onCart() {
    this.router.navigate(['/carrinho']);
  }

  home() {
    this.router.navigate(['/']);
  }

  openDrawer(categoryName: string) {
    this.drawerService.open(categoryName);
  }

  news() {
    this.router.navigate(['/novidades']);
  }

  products() {
    this.router.navigate(['/loja']);
  }
}