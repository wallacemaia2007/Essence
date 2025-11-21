import { AcessoriosTypes } from '../../core/types/sub-categories.ts/acessorios-types';
import { BodysTypes } from '../../core/types/sub-categories.ts/bodys-types';
import { CalcadosTypes } from '../../core/types/sub-categories.ts/calcados-types';
import { CalcasTypes } from '../../core/types/sub-categories.ts/calcas-types';
import { CamisetasTypes } from '../../core/types/sub-categories.ts/camisetas-types';
import { CroppedsTypes } from '../../core/types/sub-categories.ts/croppeds-types';
import { SaiasTypes } from '../../core/types/sub-categories.ts/saias-types';
import { VestidosTypes } from '../../core/types/sub-categories.ts/vestidos-types';
import { EnumUtils } from './enum.util';

export interface DrawerConfig {
  title: string;
  categories: { name: string }[];
}

export const DRAWER_CONFIGS: Record<string, DrawerConfig> = {
  vestidos: {
    title: 'Vestidos',
    categories: EnumUtils.enumToArray(VestidosTypes),
  },
  acessorios: {
    title: 'Acessórios',
    categories: EnumUtils.enumToArray(AcessoriosTypes),
  },
  croppeds: {
    title: 'Cropped',
    categories: EnumUtils.enumToArray(CroppedsTypes),
  },
  camisetas: {
    title: 'Camisetas',
    categories: EnumUtils.enumToArray(CamisetasTypes),
  },
  calcas: {
    title: 'Calças',
    categories: EnumUtils.enumToArray(CalcasTypes),
  },
  saias: {
    title: 'Saias',
    categories: EnumUtils.enumToArray(SaiasTypes),
  },
  bodys: {
    title: 'Bodys',
    categories: EnumUtils.enumToArray(BodysTypes),
  },
  calçados: {
    title: 'Calçados',
    categories: EnumUtils.enumToArray(CalcadosTypes),
  },
};
