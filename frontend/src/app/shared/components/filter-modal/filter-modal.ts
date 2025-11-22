import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { SliderModule } from 'primeng/slider';
import { CheckboxModule } from 'primeng/checkbox';
import { FilterService } from '../../../core/services/filter-service';
import { FilterOptions } from '../../../core/types/filter-types';

@Component({
  selector: 'app-filter-modal',
  standalone: true,
  imports: [CommonModule, FormsModule, DialogModule, ButtonModule, SliderModule, CheckboxModule],
  templateUrl: './filter-modal.html',
  styleUrl: './filter-modal.scss',
})
export class FilterModalComponent implements OnInit {
  @Output() filtersApplied = new EventEmitter<FilterOptions>();
  @Output() modalClosed = new EventEmitter<void>();

  visible = false;
  tempFilters: FilterOptions = {};

  expandedSections = {
    category: true,
    price: true,
    size: false,
    color: false,
    sort: false
  };

  categories = [
    { label: 'Vestidos', value: 'vestidos' },
    { label: 'Acessórios', value: 'acessorios' },
    { label: 'Croppeds', value: 'croppeds' },
    { label: 'Camisetas', value: 'camisetas' },
    { label: 'Calças', value: 'calcas' },
    { label: 'Saias', value: 'saias' },
    { label: 'Bodys', value: 'bodys' },
    { label: 'Calçados', value: 'calçados' },
  ];

  sizes = ['PP', 'P', 'M', 'G', 'GG', 'XG'];

  colors = [
    { label: 'Preto', value: '#000000' },
    { label: 'Branco', value: '#FFFFFF' },
    { label: 'Azul', value: '#0000FF' },
    { label: 'Vermelho', value: '#FF0000' },
    { label: 'Verde', value: '#008000' },
    { label: 'Rosa', value: '#FFC0CB' },
    { label: 'Amarelo', value: '#FFFF00' },
    { label: 'Cinza', value: '#808080' },
  ];

  sortOptions = [
    { label: 'Mais Popular', value: 'popular' },
    { label: 'Menor Preço', value: 'price-low' },
    { label: 'Maior Preço', value: 'price-high' },
    { label: 'Mais Novo', value: 'newest' },
  ];

  priceRange: [number, number] = [0, 5000];
  maxPrice = 5000;
  minPrice = 0;

  selectedSizes: string[] = [];
  selectedColors: string[] = [];

  constructor(private filterService: FilterService) {}

  ngOnInit(): void {
    const current = this.filterService.getFilters();
    this.tempFilters = { ...current };
    this.priceRange = [current.minPrice || 0, current.maxPrice || 5000];
    this.selectedSizes = current.sizes || [];
    this.selectedColors = current.colors || [];
  }

  openModal(): void {
    this.visible = true;
  }

  closeModal(): void {
    this.visible = false;
    this.modalClosed.emit();
  }

  toggleFilterSection(section: keyof typeof this.expandedSections): void {
    this.expandedSections[section] = !this.expandedSections[section];
  }

  setSortOption(value: string): void {
    const validSortOptions: Array<'popular' | 'price-low' | 'price-high' | 'newest'> = [
      'popular',
      'price-low',
      'price-high',
      'newest'
    ];

    if (validSortOptions.includes(value as any)) {
      this.tempFilters.sortBy = value as FilterOptions['sortBy'];
    }
  }

  applyFilters(): void {
    const filters: FilterOptions = {
      category: this.tempFilters.category,
      subcategory: this.tempFilters.subcategory,
      minPrice: this.priceRange[0],
      maxPrice: this.priceRange[1],
      sortBy: this.tempFilters.sortBy,
      sizes: this.selectedSizes.length > 0 ? this.selectedSizes : undefined,
      colors: this.selectedColors.length > 0 ? this.selectedColors : undefined,
      inStock: this.tempFilters.inStock,
      rating: this.tempFilters.rating,
    };

    Object.keys(filters).forEach(
      (key) => (filters as any)[key] === undefined && delete (filters as any)[key]
    );

    this.filterService.setFilters(filters);
    this.filtersApplied.emit(filters);
    this.closeModal();
  }

  resetFilters(): void {
    this.tempFilters = {};
    this.priceRange = [0, 5000];
    this.selectedSizes = [];
    this.selectedColors = [];
    this.filterService.resetFilters();
    this.filtersApplied.emit({});
    this.closeModal();
  }

  toggleSize(size: string): void {
    const index = this.selectedSizes.indexOf(size);
    if (index > -1) {
      this.selectedSizes.splice(index, 1);
    } else {
      this.selectedSizes.push(size);
    }
  }

  toggleColor(color: string): void {
    const index = this.selectedColors.indexOf(color);
    if (index > -1) {
      this.selectedColors.splice(index, 1);
    } else {
      this.selectedColors.push(color);
    }
  }

  isSizeSelected(size: string): boolean {
    return this.selectedSizes.includes(size);
  }

  isColorSelected(color: string): boolean {
    return this.selectedColors.includes(color);
  }

  getFilterCount(): number {
    let count = 0;
    if (this.tempFilters.category) count++;
    if (this.selectedSizes.length > 0) count++;
    if (this.selectedColors.length > 0) count++;
    if (this.priceRange[0] > this.minPrice || this.priceRange[1] < this.maxPrice) count++;
    if (this.tempFilters.sortBy) count++;
    return count;
  }

  hasActiveFilters(): boolean {
    return this.getFilterCount() > 0;
  }
  getIconForSort(value: string): string {
    const iconMap: { [key: string]: string } = {
      'popular': 'pi-star',
      'price-low': 'pi-arrow-up',
      'price-high': 'pi-arrow-down',
      'newest': 'pi-calendar'
    };
    return `pi ${iconMap[value] || 'pi-sort-alt'}`;
  }

  getSortLabel(value: string): string {
    const option = this.sortOptions.find(opt => opt.value === value);
    return option ? option.label : 'Padrão';
  }
}