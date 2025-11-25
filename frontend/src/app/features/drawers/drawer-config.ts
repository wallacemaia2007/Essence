import { AcessoriosTypes } from '../../core/types/sub-categories.ts/acessorios-types';
import { BodysTypes } from '../../core/types/sub-categories.ts/bodys-types';
import { CalcadosTypes } from '../../core/types/sub-categories.ts/calcados-types';
import { CalcasTypes } from '../../core/types/sub-categories.ts/calcas-types';
import { CamisetasTypes } from '../../core/types/sub-categories.ts/camisetas-types';
import { CroppedsTypes } from '../../core/types/sub-categories.ts/croppeds-types';
import { SaiasTypes } from '../../core/types/sub-categories.ts/saias-types';
import { VestidosTypes } from '../../core/types/sub-categories.ts/vestidos-types';

export interface DrawerConfig {
  title: string;
  categories: { name: string }[];
}

// Função para converter slug para label legível
function slugToLabel(slug: string): string {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// Converter enums e adicionar labels legíveis
function enumToDrawerCategories<T extends Record<string, string>>(enumObj: T): Array<{ name: string }> {
  return Object.values(enumObj).map((value) => ({
    name: slugToLabel(value), // Converte "manga-curta" → "Manga Curta"
  }));
}

export const DRAWER_CONFIGS: Record<string, DrawerConfig> = {
  vestidos: {
    title: 'Vestidos',
    categories: enumToDrawerCategories(VestidosTypes),
  },
  acessorios: {
    title: 'Acessórios',
    categories: enumToDrawerCategories(AcessoriosTypes),
  },
  croppeds: {
    title: 'Cropped',
    categories: enumToDrawerCategories(CroppedsTypes),
  },
  camisetas: {
    title: 'Camisetas',
    categories: enumToDrawerCategories(CamisetasTypes),
  },
  calcas: {
    title: 'Calças',
    categories: enumToDrawerCategories(CalcasTypes),
  },
  saias: {
    title: 'Saias',
    categories: enumToDrawerCategories(SaiasTypes),
  },
  bodys: {
    title: 'Bodys',
    categories: enumToDrawerCategories(BodysTypes),
  },
  calcados: {
    title: 'Calçados',
    categories: enumToDrawerCategories(CalcadosTypes),
  },
};