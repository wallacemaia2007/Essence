import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StroreService } from '../../services/store-service';
import { FilterModalComponent } from '../../../../shared/components/filter-modal/filter-modal';
import { FilterOptions } from '../../../../core/types/filter-types';
import { FilterService } from '../../../../core/services/filter-service';

@Component({
  selector: 'app-store-component',
  imports: [CommonModule, FilterModalComponent],
  templateUrl: './store-component.html',
  styleUrls: ['./store-component.scss'],
})
export class StroreComponent implements OnInit {
  @ViewChild(FilterModalComponent) filterModal!: FilterModalComponent;

  allProducts: any[] = [];
  filteredProducts: any[] = [];
  favorites: Set<string> = new Set();

  // Filtros atuais
  currentFilters: FilterOptions = {};

  constructor(
    private storeService: StroreService,
    private filterService: FilterService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadProducts();
    
    this.filterService.filterState$.subscribe((state) => {
      this.currentFilters = state.filters;
      this.applyFilters();
    });
  }

  loadProducts(): void {
    this.storeService.getAllProducts().subscribe({
      next: (products) => {
        this.allProducts = products;
        this.applyFilters();
      },
    });
  }

  private applyFilters(): void {
    let filtered = [...this.allProducts];

    if (this.currentFilters.category) {
      filtered = filtered.filter(
        (p) => p.category.toLowerCase() === this.currentFilters.category?.toLowerCase()
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
        p.tamanho?.some((t: string) =>
          this.currentFilters.sizes!.includes(t)
        )
      );
    }

    if (this.currentFilters.inStock !== undefined) {
      filtered = filtered.filter((p) => p.inStock === this.currentFilters.inStock);
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
          (a, b) =>
            new Date(b.createdDate || 0).getTime() -
            new Date(a.createdDate || 0).getTime()
        );
      default:
        return sorted;
    }
  }

  onToggleFavorite(product: any): void {
    if (this.favorites.has(product.id)) {
      this.favorites.delete(product.id);
    } else {
      this.favorites.add(product.id);
    }
  }

  isFavorite(productId: string): boolean {
    return this.favorites.has(productId);
  }

  onFiltersApplied(filters: FilterOptions): void {
    
    this.currentFilters = filters;
    this.applyFilters();
  }
}
