import { CategoriesTypes } from '../../core/types/categories-types';
import { AcessoriosTypes } from '../../core/types/sub-categories.ts/acessorios-types';
import { BodysTypes } from '../../core/types/sub-categories.ts/bodys-types';
import { CalcadosTypes } from '../../core/types/sub-categories.ts/calcados-types';
import { CalcasTypes } from '../../core/types/sub-categories.ts/calcas-types';
import { CamisetasTypes } from '../../core/types/sub-categories.ts/camisetas-types';
import { CroppedsTypes } from '../../core/types/sub-categories.ts/croppeds-types';
import { SaiasTypes } from '../../core/types/sub-categories.ts/saias-types';
import { VestidosTypes } from '../../core/types/sub-categories.ts/vestidos-types';
import { SUBCATEGORY_SLUG_LABEL_MAP } from '../../core/types/subcategory-mapping';

export interface DrawerConfig {
  title: string;
  categoryType: string;
  categories: { name: string; slug: string }[];
}

function enumToDrawerCategories<T extends Record<string, string>>(
  enumObj: T
): Array<{ name: string; slug: string }> {
  return Object.values(enumObj).map((slug) => ({
    slug: slug,
    name: SUBCATEGORY_SLUG_LABEL_MAP[slug] || slug,
  }));
}

export const DRAWER_CONFIGS: Record<string, DrawerConfig> = {
  vestidos: {
    title: 'Vestidos',
    categoryType: CategoriesTypes.VESTIDOS,
    categories: enumToDrawerCategories(VestidosTypes),
  },
  acessorios: {
    title: 'Acessórios',
    categoryType: CategoriesTypes.ACESSORIOS,
    categories: enumToDrawerCategories(AcessoriosTypes),
  },
  croppeds: {
    title: 'Cropped',
    categoryType: CategoriesTypes.CROPPEDS, 
    categories: enumToDrawerCategories(CroppedsTypes),
  },
  camisetas: {
    title: 'Camisetas',
    categoryType: CategoriesTypes.CAMISETAS,
    categories: enumToDrawerCategories(CamisetasTypes),
  },
  calcas: {
    title: 'Calças',
    categoryType: CategoriesTypes.CALCAS, 
    categories: enumToDrawerCategories(CalcasTypes),
  },
  saias: {
    title: 'Saias',
    categoryType: CategoriesTypes.SAIAS, 
    categories: enumToDrawerCategories(SaiasTypes),
  },
  bodys: {
    title: 'Bodys',
    categoryType: CategoriesTypes.BODYS, 
    categories: enumToDrawerCategories(BodysTypes),
  },
  calcados: {
    title: 'Calçados',
    categoryType: CategoriesTypes.CALCADOS, 
    categories: enumToDrawerCategories(CalcadosTypes),
  },
};