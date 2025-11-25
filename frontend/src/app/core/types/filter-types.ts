import { CategoriesTypes } from "./categories-types";
import { ColorTypes } from "./colors/colors-types";
import { SizeType } from "./size-types";

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


export const SIZE_LABELS: Record<SizeType, string> = {
  [SizeType.SIZE_PP]: 'PP',
  [SizeType.SIZE_P]: 'P',
  [SizeType.SIZE_M]: 'M',
  [SizeType.SIZE_G]: 'G',
  [SizeType.SIZE_GG]: 'GG',
  [SizeType.SIZE_XG]: 'XG',
};

export const CATEGORY_LABELS: Record<CategoriesTypes, string> = {
  [CategoriesTypes.VESTIDOS]: 'Vestidos',
  [CategoriesTypes.ACESSORIOS]: 'Acessórios',
  [CategoriesTypes.CROPPEDS]: 'Croppeds',
  [CategoriesTypes.CAMISETAS]: 'Camisetas',
  [CategoriesTypes.CALCAS]: 'Calças',
  [CategoriesTypes.SAIAS]: 'Saias',
  [CategoriesTypes.BODYS]: 'Bodys',
  [CategoriesTypes.CALCADOS]: 'Calçados',
};

export const COLOR_LABELS: Record<ColorTypes, string> = {
  [ColorTypes.RED]: 'Vermelho',
  [ColorTypes.GREEN]: 'Verde',
  [ColorTypes.BLUE]: 'Azul',
  [ColorTypes.YELLOW]: 'Amarelo',
  [ColorTypes.BLACK]: 'Preto',
  [ColorTypes.WHITE]: 'Branco',
  [ColorTypes.ORANGE]: 'Laranja',
  [ColorTypes.PURPLE]: 'Roxo',
  [ColorTypes.PINK]: 'Rosa',
  [ColorTypes.BROWN]: 'Marrom',
  [ColorTypes.GOLD]: 'Dourado',
  [ColorTypes.GRAY]: 'Cinza',
  [ColorTypes.BEIGE]: 'Bege',
};