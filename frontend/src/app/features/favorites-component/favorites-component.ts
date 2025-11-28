import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription, combineLatest } from 'rxjs';
import { FavoriteService } from '../../core/services/favorite-service';
import { ProductModalService } from '../../core/services/product-modal-service';
import { Router } from '@angular/router';
import { Product } from '../../core/models/product-interfaces';
import { StoreService } from '../store/services/store-service';

@Component({
  selector: 'app-favorites-component',
  imports: [CommonModule],
  templateUrl: './favorites-component.html',
  styleUrl: './favorites-component.scss',
})
export class FavoritesComponent implements OnInit, OnDestroy {
  favoriteProducts: Product[] = [];
  private sub?: Subscription;

  constructor(
    private favoriteService: FavoriteService,
    private storeService: StoreService,
    private productModalService: ProductModalService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.sub = combineLatest([
      this.storeService.getAllProducts(),
      this.favoriteService.favoritesIds$,
    ]).subscribe(([allProducts, favIds]) => {
      this.favoriteProducts = allProducts.filter((p: Product) => favIds.has(p.id));
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  remove(productId: string): void {
    this.favoriteService.remove(productId);
  }

  openProductModal(product: Product): void {
    this.productModalService.open({
      id: product.id,
      name: product.name,
      price: product.price,
      originalPrice: product.originalPrice,
      imageUrl: product.imageUrl!,
      description: product.description,
      category: product.category,
      subcategory: product.subcategory,
      sizes: product.sizes,
      colors: product.colors || (product.color ? [product.color] : undefined),
      rating: product.rating,
      reviews: product.reviews,
      inStock: product.inStock,
      maxInstallments: product.maxInstallments,
    });
  }

  goToStore(): void {
    this.router.navigate(['/loja']);

  }
}
