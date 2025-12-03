import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { BehaviorSubject, interval, Observable, Subject, takeUntil } from 'rxjs';
import { Router } from '@angular/router';
import { StoreService } from '../store/services/store-service';
import { Product } from '../../core/models/product-interfaces';
import { FavoriteService } from '../../core/services/favorite-service';
import { FilterModalComponent } from '../../shared/components/filter-modal/filter-modal';
import { FilterOptions } from '../../core/types/filter-types';
import { ProductModalService } from '../../core/services/product-modal-service';
import { CartService } from '../../core/services/cart-service';
import { CartDrawerService } from '../../core/services/cart-drawer-service';

@Component({
  selector: 'app-offers-component',
  templateUrl: './offers-component.html',
  styleUrls: ['./offers-component.scss'],
  standalone: true,
  imports: [CommonModule, FilterModalComponent],
})
export class OffersComponent implements OnInit, OnDestroy {
  banners = [
    'https://img.freepik.com/vetores-gratis/banner-preto-de-venda-na-sexta-feira-com-presentes-e-baloes-realistas_1361-2929.jpg?semt=ais_hybrid&w=1100&q=80',
    'https://cdn.vectorstock.com/i/500p/95/65/fashion-sale-banner-clothing-promotion-vector-54439565.jpg',
    'https://st2.depositphotos.com/25867432/42849/v/1600/depositphotos_428490718-stock-illustration-sale-poster-design-clothing-store.jpg',
  ];
  
  currentBanner = 0;
  private bannerInterval: any;

  favorites = new Set<string>();

  allProducts: Product[] = [];
  filteredProducts: Product[] = [];
  discountedProducts$!: Observable<Product[]>;
  remainingTime = '';
  currentFilters: FilterOptions = {};

  private destroy$ = new Subject<void>();

  constructor(
    private storeService: StoreService,
    private router: Router,
    private favoriteService: FavoriteService,
    private productModalService: ProductModalService,
    private cart: CartService,
    private cartDrawer: CartDrawerService
  ) {}

  ngOnInit() {
    this.loadDiscountedProducts();
    this.startBannerAutoplay();
  }

  loadDiscountedProducts() {
    this.storeService.getDiscountedProducts().subscribe((products) => {
      this.allProducts = products;
      this.applyFilters();
    });
  }

  ngOnDestroy() {
    this.pauseAutoplay();
    this.destroy$.next();
    this.destroy$.complete();
  }

  startBannerAutoplay() {
    this.bannerInterval = setInterval(() => {
      this.nextBanner();
    }, 5000);
  }

  pauseAutoplay() {
    if (this.bannerInterval) clearInterval(this.bannerInterval);
  }

  resumeAutoplay() {
    this.startBannerAutoplay();
  }

  prevBanner() {
    this.currentBanner = (this.currentBanner - 1 + this.banners.length) % this.banners.length;
  }

  nextBanner() {
    this.currentBanner = (this.currentBanner + 1) % this.banners.length;
  }

  calculateDiscountedPrice(price: number, discount: number): number {
    return price * (1 - discount / 100);
  }

  isFavorite(productId: string): boolean {
    return this.favoriteService.isFavorite(productId);
  }

  onToggleFavorite(productId: string) {
    this.favoriteService.toggle(productId);
  }

  onProductClick(product: Product) {
    const modalData = {
      ...product,
      sizes: Array.isArray(product.sizes)
        ? product.sizes
        : (product.size ? [product.size] : []),
      colors: Array.isArray(product.colors)
        ? product.colors
        : (product.color ? [product.color] : []),
    };
    this.productModalService.open(modalData);
  }

  addToCart(product: Product) {
    this.cart.add(product, 1);
    this.cartDrawer.open();
  }

  goToStore() {
    this.router.navigate(['/loja']);
  }

  onFiltersApplied(filters: FilterOptions): void {
    this.currentFilters = filters;
    this.applyFilters();
  }

  applyFilters(): void {
    let products = [...this.allProducts];

    if (this.currentFilters.category) {
      products = products.filter(
        (p) => p.category?.toLowerCase() === this.currentFilters.category?.toLowerCase()
      );
    }

    if (this.currentFilters.subcategory) {
      products = products.filter(
        (p) => p.subcategory?.toLowerCase() === this.currentFilters.subcategory?.toLowerCase()
      );
    }

    if (this.currentFilters.minPrice !== undefined || this.currentFilters.maxPrice !== undefined) {
      const min = this.currentFilters.minPrice ?? 0;
      const max = this.currentFilters.maxPrice ?? Infinity;
      products = products.filter((p) => {
        const price = p.price || 0;
        return price >= min && price <= max;
      });
    }

    if (this.currentFilters.sizes?.length) {
      products = products.filter((p) =>
        p.sizes?.some((size) => this.currentFilters.sizes!.includes(size))
      );
    }

    if (this.currentFilters.colors?.length) {
      products = products.filter((p) =>
        p.colors?.some((color) => this.currentFilters.colors!.includes(color))
      );
    }

    if (this.currentFilters.inStock) {
      products = products.filter((p) => p.inStock === true);
    }

    if (this.currentFilters.sortBy) {
      products = this.sortProducts(products, this.currentFilters.sortBy);
    }

    this.filteredProducts = products;
    this.discountedProducts$ = new Observable((observer) => {
      observer.next(this.filteredProducts);
      observer.complete();
    });
  }

  sortProducts(products: Product[], sortBy: string): Product[] {
    switch (sortBy) {
      case 'price-low':
        return products.sort((a, b) => (a.price || 0) - (b.price || 0));
      case 'price-high':
        return products.sort((a, b) => (b.price || 0) - (a.price || 0));
      case 'newest':
        return products.sort((a, b) => {
          const dateA = a.createdDate ? new Date(a.createdDate).getTime() : 0;
          const dateB = b.createdDate ? new Date(b.createdDate).getTime() : 0;
          return dateB - dateA;
        });
      default:
        return products;
    }
  }

}
