import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { StroreService } from './service/strore-service';

@Component({
  selector: 'app-strore-component',
  imports: [CommonModule],
  templateUrl: './strore-component.html',
  styleUrls: ['./strore-component.scss'],
})
export class StroreComponent implements OnInit {
  allProducts: Product[] = [];
  favorites: Set<string> = new Set();

  constructor(private productService: StroreService, private router: Router) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getAllProducts().subscribe({
      next: (products) => {
        this.allProducts = products;
      },
      error: (error) => {
        console.error('Erro ao carregar produtos:', error);
      },
    });
  }

  onToggleFavorite(product: Product): void {
    if (this.favorites.has(product.id)) {
      this.favorites.delete(product.id);
    } else {
      this.favorites.add(product.id);
    }
  }

  isFavorite(productId: string): boolean {
    return this.favorites.has(productId);
  }

  onProductClick(product: Product): void {
    this.router.navigate(['/produto', product.id]);
  }
}
