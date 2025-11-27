import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StroreService } from '../../services/store-service';
import { FilterModalComponent } from '../../../../shared/components/filter-modal/filter-modal';
import { FilterOptions } from '../../../../core/types/filter-types';
import { FilterService } from '../../../../core/services/filter-service';
import { FavoriteService } from '../../../../core/services/favorite-service';
import { ProductModalService } from '../../../../core/services/product-modal-service';

@Component({
  selector: 'app-store-component',
  imports: [CommonModule, FilterModalComponent],
  templateUrl: './store-component.html',
  styleUrls: ['./store-component.scss'],
})
export class StoreComponent implements OnInit {
  @ViewChild(FilterModalComponent) filterModal!: FilterModalComponent;

  allProducts: any[] = [];
  filteredProducts: any[] = [];
  currentFilters: FilterOptions = {};

  constructor(
    private storeService: StroreService,
    private filterService: FilterService,
    private favoriteService: FavoriteService,
    private route: ActivatedRoute,
    private router: Router,
    private productModalService: ProductModalService
  ) {}

  ngOnInit(): void {
    this.storeService.getAllProducts().subscribe({
      next: (products) => {
        this.allProducts = products;

        this.route.queryParams.subscribe((params) => {
          if (params['category'] || params['subcategory']) {
            this.applyQueryParamFilters(params);
          } else {
            this.applyFilters();
          }
        });
      },
    });

    this.filterService.filterState$.subscribe((state) => {
      if (Object.keys(state.filters).length > 0) {
        this.currentFilters = state.filters;
        this.applyFilters();
      }
    });
  }

  private applyQueryParamFilters(params: any): void {
    let filtered = [...this.allProducts];

    const category = params['category'];
    const subcategory = params['subcategory'];

    if (category) {
      filtered = filtered.filter(
        (p) => p.category && p.category.toLowerCase() === category.toLowerCase()
      );
    }
    if (subcategory) {
      filtered = filtered.filter((p) => {
        const match = p.subcategory && p.subcategory.toLowerCase() === subcategory.toLowerCase();
        return match;
      });
    }

    this.filteredProducts = filtered;
  }

  private applyFilters(): void {
    let filtered = [...this.allProducts];

    if (this.currentFilters.category) {
      filtered = filtered.filter(
        (p) => p.category.toLowerCase() === this.currentFilters.category?.toLowerCase()
      );
    }

    if (this.currentFilters.subcategory) {
      filtered = filtered.filter(
        (p) =>
          p.subcategory &&
          p.subcategory.toLowerCase() === this.currentFilters.subcategory?.toLowerCase()
      );
    }

    if (this.currentFilters.minPrice) {
      filtered = filtered.filter((p) => p.price >= this.currentFilters.minPrice!);
    }

    if (this.currentFilters.maxPrice) {
      filtered = filtered.filter((p) => p.price <= this.currentFilters.maxPrice!);
    }

    if (this.currentFilters.sizes && this.currentFilters.sizes.length > 0) {
      filtered = filtered.filter((p) =>
        p.sizes?.some((t: string) => this.currentFilters.sizes!.includes(t))
      );
    }

    if (this.currentFilters.colors && this.currentFilters.colors.length > 0) {
      filtered = filtered.filter((p) =>
        this.currentFilters.colors!.some((color: string) =>
          p.color.toLowerCase().includes(color.toLowerCase())
        )
      );
    }

    if (this.currentFilters.inStock !== undefined) {
      filtered = filtered.filter((p) => p.inStock === this.currentFilters.inStock);
    }

    if (this.currentFilters.rating) {
      filtered = filtered.filter((p) => (p.rating || 0) >= this.currentFilters.rating!);
    }

    filtered = this.sortProducts(filtered);
    this.filteredProducts = filtered;
  }

  private sortProducts(products: any[]): any[] {
    const sorted = [...products];

    switch (this.currentFilters.sortBy) {
      case 'price-low':
        return sorted.sort((a, b) => a.price - b.price);
      case 'price-high':
        return sorted.sort((a, b) => b.price - a.price);
      case 'newest':
        return sorted.sort(
          (a, b) => new Date(b.createdDate || 0).getTime() - new Date(a.createdDate || 0).getTime()
        );
      default:
        return sorted;
    }
  }

  onToggleFavorite(product: any): void {
    this.favoriteService.toggle(product.id);
  }

  isFavorite(productId: string): boolean {
    return this.favoriteService.isFavorite(productId);
  }

  onFiltersApplied(filters: FilterOptions): void {
    this.currentFilters = filters;
    this.applyFilters();
  }

  openProductModal(product: any): void {
    this.productModalService.open({
      id: product.id,
      name: product.name,
      price: product.price,
      originalPrice: product.originalPrice,
      imageUrl: product.imageUrl,
      description: product.description,
      category: product.category,
      subcategory: product.subcategory,
      sizes: product.sizes,
      rating: product.rating,
      reviews: product.reviews,
      inStock: product.inStock,
    });
  }
}
