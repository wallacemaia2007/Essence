export interface FilterOptions {
  category?: string;
  subcategory?: string;
  minPrice?: number;
  maxPrice?: number;
  sortBy?: 'popular' | 'price-low' | 'price-high' | 'newest';
  sizes?: string[];
  colors?: string[];
  inStock?: boolean;
  rating?: number;
}

export interface PriceRange {
  min: number;
  max: number;
}

export interface FilterState {
  filters: FilterOptions;
  isLoading: boolean;
  hasFiltersApplied: boolean;
}

export interface FilterCategory {
  label: string;
  key: keyof FilterOptions;
  type: 'checkbox' | 'range' | 'select' | 'multi-select';
  options?: Array<{ label: string; value: string | number }>;
}