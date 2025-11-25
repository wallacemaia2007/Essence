import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CategoriesTypes } from '../../../core/types/categories-types';
import { VestidosTypes } from '../../../core/types/sub-categories.ts/vestidos-types';

import { ColorTypes } from '../../../core/types/colors/colors-types';
import { CamisetasTypes } from '../../../core/types/sub-categories.ts/camisetas-types';
import { CroppedsTypes } from '../../../core/types/sub-categories.ts/croppeds-types';
import { SaiasTypes } from '../../../core/types/sub-categories.ts/saias-types';
import { CalcasTypes } from '../../../core/types/sub-categories.ts/calcas-types';
import { CalcadosTypes } from '../../../core/types/sub-categories.ts/calcados-types';
import { AcessoriosTypes } from '../../../core/types/sub-categories.ts/acessorios-types';
import { BodysTypes } from '../../../core/types/sub-categories.ts/bodys-types';

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  color: string;
  sizes: string[];
  imageUrl: string;
  category: string;
  subcategory: string;
  discount?: number;
  reviews?: number;
  inStock: boolean;
  rating?: number;
  createdDate: Date;
}

@Injectable({
  providedIn: 'root',
})
export class StroreService {
  private products: Product[] = [
    // ==================== VESTIDOS ====================
    // CASUAL
    {
      id: '1',
      name: 'Vestido Casual Azul Claro',
      price: 159.9,
      originalPrice: 199.9,
      discount: 20,
      imageUrl: 'https://i.pinimg.com/736x/37/22/3c/37223cdaa5361636a932192e3bf2200a.jpg',
      category: CategoriesTypes.VESTIDOS,
      subcategory: VestidosTypes.CASUAL,
      description:
        'Vestido casual em azul claro com tecido respirável.  Perfeito para dias quentes e passeios.',
      color: ColorTypes. BLUE,
      sizes: ['P', 'M', 'G', 'GG'],
      rating: 4.6,
      reviews: 128,
      inStock: true,
      createdDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    },
    {
      id: '2',
      name: 'Vestido Branco Minimalista',
      price: 179.9,
      imageUrl: 'https://i.pinimg.com/736x/4c/0f/83/4c0f834ed308063c9c134b1adb3022c3.jpg',
      category: CategoriesTypes.VESTIDOS,
      subcategory: VestidosTypes.CASUAL,
      description:
        'Vestido branco com design minimalista e moderno. Versátil para qualquer ocasião.',
      color: ColorTypes.WHITE,
      sizes: ['P', 'M', 'G', 'GG', 'XG'],
      rating: 4.7,
      reviews: 95,
      inStock: true,
      createdDate: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
    },

    // FESTA
    {
      id: '3',
      name: 'Vestido Floral Festa Rosa',
      price: 189.9,
      originalPrice: 249.9,
      discount: 24,
      imageUrl: 'https://i.pinimg.com/736x/c0/c7/9c/c0c79c6f375f313c1e2c01f83327180b.jpg',
      category: CategoriesTypes.VESTIDOS,
      subcategory: VestidosTypes.FESTA,
      description:
        'Vestido floral festa em tons de rosa. Ideal para eventos especiais com tecido de qualidade.',
      color: ColorTypes.PINK,
      sizes: ['P', 'M', 'G'],
      rating: 4.8,
      reviews: 156,
      inStock: true,
      createdDate: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
    },
    {
      id: '4',
      name: 'Vestido Festa Dourado Brilhante',
      price: 229.9,
      originalPrice: 299.9,
      discount: 23,
      imageUrl: 'https://i.pinimg.com/1200x/a6/a1/7e/a6a17e64dc935f7605f2642b14f0ca89.jpg',
      category: CategoriesTypes.VESTIDOS,
      subcategory: VestidosTypes.FESTA,
      description:
        'Vestido festa em dourado brilhante com acabamento premium. Destaque garantido em qualquer ocasião.',
      color: ColorTypes.GOLD,
      sizes: ['P', 'M', 'G'],
      rating: 4.9,
      reviews: 203,
      inStock: true,
      createdDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    },

    // LONGO
    {
      id: '5',
      name: 'Vestido Social Preto Longo',
      price: 249.9,
      originalPrice: 299.9,
      discount: 17,
      imageUrl: 'https://i.pinimg.com/736x/4c/f3/9e/4cf39e7d1ff107d99e5645152da08d6a.jpg',
      category: CategoriesTypes.VESTIDOS,
      subcategory: VestidosTypes.LONGO,
      description:
        'Vestido social preto longo elegante. Perfeito para eventos corporativos e formais.',
      color: ColorTypes. BLACK,
      sizes: ['P', 'M', 'G', 'GG'],
      rating: 4.9,
      reviews: 189,
      inStock: true,
      createdDate: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000),
    },
    {
      id: '6',
      name: 'Vestido Longo Azul Marinho',
      price: 219.9,
      originalPrice: 269.9,
      discount: 19,
      imageUrl: 'https://i.pinimg.com/1200x/eb/3b/20/eb3b20c0404cf9cd4ecd8d313677b74d.jpg',
      category: CategoriesTypes.VESTIDOS,
      subcategory: VestidosTypes.LONGO,
      description:
        'Vestido longo em azul marinho sofisticado. Ideal para cerimônias e eventos especiais.',
      color: ColorTypes.BLUE,
      sizes: ['P', 'M', 'G'],
      rating: 4.8,
      reviews: 142,
      inStock: true,
      createdDate: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
    },

    // CURTO
    {
      id: '7',
      name: 'Vestido Curto Vermelho Clássico',
      price: 139.9,
      originalPrice: 179.9,
      discount: 22,
      imageUrl: 'https://i.pinimg.com/736x/1d/7e/ea/1d7eeadf6b62c3299eb42231e2e323fd.jpg',
      category: CategoriesTypes.VESTIDOS,
      subcategory: VestidosTypes.CURTO,
      description:
        'Vestido curto em vermelho clássico.  Modelo versátil para noites especiais e saídas.',
      color: ColorTypes.RED,
      sizes: ['P', 'M', 'G', 'GG'],
      rating: 4.7,
      reviews: 117,
      inStock: true,
      createdDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    },

    // MIDI
    {
      id: '8',
      name: 'Vestido Midi Estampa Geométrica',
      price: 169.9,
      imageUrl: 'https://i.pinimg.com/1200x/0d/3a/c2/0d3ac293a63af7611e0af8c68e000067.jpg',
      category: CategoriesTypes.VESTIDOS,
      subcategory: VestidosTypes.MIDI,
      description:
        'Vestido midi com estampa geométrica moderna. Comprimento perfeito para dia ou noite.',
      color: ColorTypes.BLUE,
      sizes: ['P', 'M', 'G', 'GG'],
      rating: 4.6,
      reviews: 98,
      inStock: true,
      createdDate: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
    },

    // ==================== CAMISETAS ====================
    // BÁSICA
    {
      id: '9',
      name: 'Camiseta Básica Preta Premium',
      price: 59.9,
      originalPrice: 79.9,
      discount: 25,
      imageUrl: 'https://i.pinimg.com/736x/ff/55/b5/ff55b572cdc9e5c7bcb9e1e46aca153b.jpg',
      category: CategoriesTypes.CAMISETAS,
      subcategory: CamisetasTypes.BASICA,
      description:
        'Camiseta básica preta 100% algodão premium. Confortável e durável para uso diário.',
      color: ColorTypes.BLACK,
      sizes: ['P', 'M', 'G', 'GG', 'XG'],
      rating: 4.8,
      reviews: 356,
      inStock: true,
      createdDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    },
    {
      id: '10',
      name: 'Camiseta Básica Branca Lisa',
      price: 54.9,
      imageUrl: 'https://i.pinimg.com/1200x/57/08/e5/5708e5d8a8dde6c552593fb4c9934eb7.jpg',
      category: CategoriesTypes.CAMISETAS,
      subcategory: CamisetasTypes.BASICA,
      description:
        'Camiseta básica branca lisa. Essencial para qualquer guarda-roupa, combina com tudo.',
      color: ColorTypes.WHITE,
      sizes: ['P', 'M', 'G', 'GG', 'XG'],
      rating: 4.7,
      reviews: 298,
      inStock: true,
      createdDate: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
    },
    {
      id: '11',
      name: 'Camiseta Básica Cinza Mescla',
      price: 57.9,
      imageUrl: 'https://i.pinimg.com/736x/65/fb/89/65fb890e9984c21eb94c2c25bad9ca55.jpg',
      category: CategoriesTypes.CAMISETAS,
      subcategory: CamisetasTypes.BASICA,
      description: 'Camiseta básica cinza mescla. Neutro que combina com qualquer estilo e cor.',
      color: ColorTypes. GRAY,
      sizes: ['P', 'M', 'G', 'GG', 'XG'],
      rating: 4.6,
      reviews: 267,
      inStock: true,
      createdDate: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
    },

    // ESTAMPADA
    {
      id: '12',
      name: 'Camiseta Estampada Floral Colorida',
      price: 69.9,
      imageUrl: 'https://i.pinimg.com/1200x/d0/ee/2c/d0ee2c4781fb133619962043f3eb371a.jpg',
      category: CategoriesTypes.CAMISETAS,
      subcategory: CamisetasTypes.ESTAMPADA,
      description:
        'Camiseta estampada com padrão floral vibrante. Perfeita para looks descontraídos e alegres.',
      color: ColorTypes.BLACK,
      sizes: ['P', 'M', 'G', 'GG'],
      rating: 4.5,
      reviews: 189,
      inStock: true,
      createdDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    },
    {
      id: '13',
      name: 'Camiseta Estampada Banda Rock',
      price: 74.9,
      originalPrice: 99.9,
      discount: 25,
      imageUrl: 'https://i.pinimg.com/736x/47/e8/07/47e807642fe70412b6586307f3dd69d8.jpg',
      category: CategoriesTypes.CAMISETAS,
      subcategory: CamisetasTypes.ESTAMPADA,
      description:
        'Camiseta estampada com design de banda rock clássico. Style vintage com conforto moderno.',
      color: ColorTypes.BLACK,
      sizes: ['P', 'M', 'G', 'GG'],
      rating: 4.6,
      reviews: 145,
      inStock: true,
      createdDate: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
    },

    // OVERSIZED
    {
      id: '14',
      name: 'Camiseta Oversized Branca Moda',
      price: 64.9,
      originalPrice: 89.9,
      discount: 28,
      imageUrl: 'https://i.pinimg.com/1200x/57/08/e5/5708e5d8a8dde6c552593fb4c9934eb7.jpg',
      category: CategoriesTypes.CAMISETAS,
      subcategory: CamisetasTypes.OVERSIZED,
      description:
        'Camiseta oversized branca tendência atual. Confortável e estilosa para looks modernos.',
      color: ColorTypes.WHITE,
      sizes: ['P', 'M', 'G', 'GG', 'XG'],
      rating: 4.7,
      reviews: 276,
      inStock: true,
      createdDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    },
    {
      id: '15',
      name: 'Camiseta Oversized Cinza Grafite',
      price: 69.9,
      imageUrl: 'https://i.pinimg.com/736x/16/bc/bb/16bcbb8a32022b0ad6e767af09bc3399.jpg',
      category: CategoriesTypes.CAMISETAS,
      subcategory: CamisetasTypes.OVERSIZED,
      description:
        'Camiseta oversized cinza grafite. Ideal para looks descontraídos e aconchegantes.',
      color: ColorTypes.GRAY,
      sizes: ['P', 'M', 'G', 'GG', 'XG'],
      rating: 4.5,
      reviews: 156,
      inStock: true,
      createdDate: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
    },

    // ==================== CALÇAS ====================
    // JEANS
    {
      id: '16',
      name: 'Calça Jeans Azul Clássica Slim',
      price: 139.9,
      originalPrice: 179.9,
      discount: 22,
      imageUrl: 'https://i.pinimg.com/1200x/9f/8c/0d/9f8c0d0c0ade79d924e82b9b8cc84b48.jpg',
      category: CategoriesTypes.CALCAS,
      subcategory: CalcasTypes.JEANS,
      description:
        'Calça jeans azul clássica com corte slim. Essencial para qualquer guarda-roupa moderno.',
      color: ColorTypes.BLUE,
      sizes: ['P', 'M', 'G', 'GG'],
      rating: 4.8,
      reviews: 445,
      inStock: true,
      createdDate: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
    },
    {
      id: '17',
      name: 'Calça Jeans Preto Bolsos',
      price: 129.9,
      imageUrl: 'https://i.pinimg.com/736x/68/d1/b0/68d1b06d9f140e6bd6f463937088e2a3.jpg',
      category: CategoriesTypes.CALCAS,
      subcategory: CalcasTypes.JEANS,
      description:
        'Calça jeans preta com múltiplos bolsos funcionais. Estilo e praticidade combinados.',
      color: ColorTypes. BLACK,
      sizes: ['P', 'M', 'G', 'GG', 'XG'],
      rating: 4.7,
      reviews: 312,
      inStock: true,
      createdDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    },

    // LEGGING
    {
      id: '18',
      name: 'Calça Legging Preta Compressão',
      price: 89.9,
      imageUrl: 'https://i.pinimg.com/1200x/ee/20/70/ee2070320b784d5a821713c7ead25834.jpg',
      category: CategoriesTypes.CALCAS,
      subcategory: CalcasTypes.LEGGING,
      description:
        'Legging preta com tecnologia de compressão. Ideal para academia ou uso casual confortável.',
      color: ColorTypes.BLACK,
      sizes: ['P', 'M', 'G', 'GG'],
      rating: 4.7,
      reviews: 389,
      inStock: true,
      createdDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    },
    {
      id: '19',
      name: 'Calça Legging Cinza Texturizada',
      price: 94.9,
      originalPrice: 119.9,
      discount: 21,
      imageUrl: 'https://i.pinimg.com/736x/f5/25/2d/f5252d691fb756e17788932e390abb6e.jpg',
      category: CategoriesTypes.CALCAS,
      subcategory: CalcasTypes.LEGGING,
      description:
        'Legging cinza texturizada com cintura alta. Confortável para qualquer atividade física.',
      color: ColorTypes. GRAY,
      sizes: ['P', 'M', 'G', 'GG'],
      rating: 4.6,
      reviews: 267,
      inStock: true,
      createdDate: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
    },

    // CARGO
    {
      id: '20',
      name: 'Calça Cargo Bege Funcional',
      price: 149.9,
      originalPrice: 199.9,
      discount: 25,
      imageUrl: 'https://i.pinimg.com/736x/18/e4/d7/18e4d7126a9c5b3fc990476163c550e2.jpg',
      category: CategoriesTypes.CALCAS,
      subcategory: CalcasTypes.CARGO,
      description:
        'Calça cargo bege com múltiplos bolsos e design funcional. Estilo militar sofisticado.',
      color: ColorTypes.BEIGE,
      sizes: ['P', 'M', 'G', 'GG', 'XG'],
      rating: 4.6,
      reviews: 201,
      inStock: true,
      createdDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    },
    {
      id: '21',
      name: 'Calça Cargo Preta Aventura',
      price: 159.9,
      imageUrl: 'https://i.pinimg.com/736x/68/d1/b0/68d1b06d9f140e6bd6f463937088e2a3.jpg',
      category: CategoriesTypes. CALCAS,
      subcategory: CalcasTypes. CARGO,
      description:
        'Calça cargo preta com bolsos laterais. Perfeita para aventuras e uso casual resistente.',
      color: ColorTypes.BLACK,
      sizes: ['P', 'M', 'G', 'GG'],
      rating: 4.7,
      reviews: 178,
      inStock: true,
      createdDate: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
    },

    // ==================== SAIAS ====================
    // MIDI
    {
      id: '22',
      name: 'Saia Midi Preta Elegante',
      price: 119.9,
      imageUrl: 'https://i.pinimg.com/1200x/9b/8e/bc/9b8ebc8d08416ea233c9606b99f83711.jpg',
      category: CategoriesTypes.SAIAS,
      subcategory: SaiasTypes.MIDI,
      description:
        'Saia midi preta elegante com comprimento perfeito. Versátil para trabalho ou eventos.',
      color: ColorTypes. BLACK,
      sizes: ['P', 'M', 'G', 'GG'],
      rating: 4.7,
      reviews: 156,
      inStock: true,
      createdDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    },
    {
      id: '23',
      name: 'Saia Midi Azul Marinho Lisa',
      price: 124.9,
      imageUrl: 'https://i.pinimg.com/736x/ae/20/19/ae20192aa80e5b649bd9337bc7e91a30.jpg',
      category: CategoriesTypes.SAIAS,
      subcategory: SaiasTypes.MIDI,
      description:
        'Saia midi azul marinho lisa sofisticada. Ideal para looks profissionais e elegantes.',
      color: ColorTypes. BLUE,
      sizes: ['P', 'M', 'G', 'GG'],
      rating: 4.6,
      reviews: 123,
      inStock: true,
      createdDate: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
    },

    // PLISSADA
    {
      id: '24',
      name: 'Saia Plissada Cinza Movimento',
      price: 129.9,
      originalPrice: 169.9,
      discount: 24,
      imageUrl: 'https://i.pinimg.com/736x/fb/5d/1f/fb5d1f2e783fd4ab6106d85f29c31310.jpg',
      category: CategoriesTypes.SAIAS,
      subcategory: SaiasTypes.PLISSADA,
      description:
        'Saia plissada cinza com movimento elegante. Perfeita para trabalho ou eventos formais.',
      color: ColorTypes.GRAY,
      sizes: ['P', 'M', 'G', 'GG'],
      rating: 4.8,
      reviews: 189,
      inStock: true,
      createdDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    },
    {
      id: '25',
      name: 'Saia Plissada Branca Clássica',
      price: 139.9,
      imageUrl: 'https://i.pinimg.com/1200x/21/7a/83/217a83124ab46b0ef8cb1481817e80b4.jpg',
      category: CategoriesTypes.SAIAS,
      subcategory: SaiasTypes.PLISSADA,
      description: 'Saia plissada branca clássica.  Versátil e elegante para diversos ocasiões.',
      color: ColorTypes.WHITE,
      sizes: ['P', 'M', 'G'],
      rating: 4.7,
      reviews: 134,
      inStock: true,
      createdDate: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
    },

    // ==================== CROPPEDS ====================
    // CURTO
    {
      id: '26',
      name: 'Cropped Branco Curto Básico',
      price: 79.9,
      imageUrl: 'https://i.pinimg.com/1200x/3d/c4/ea/3dc4eacd5a9960152f46ba9b01b40749.jpg',
      category: CategoriesTypes.CROPPEDS,
      subcategory: CroppedsTypes.CURTO,
      description:
        'Cropped branco curto de corte perfeito. Versátil para looks modernos e descontraídos.',
      color: ColorTypes.WHITE,
      sizes: ['P', 'M', 'G', 'GG'],
      rating: 4.6,
      reviews: 267,
      inStock: true,
      createdDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    },
    {
      id: '27',
      name: 'Cropped Preto Curto Ajustado',
      price: 84.9,
      imageUrl: 'https://i.pinimg.com/1200x/1c/30/05/1c3005dfddca89f2e6199a4284c055d4.jpg',
      category: CategoriesTypes.CROPPEDS,
      subcategory: CroppedsTypes.CURTO,
      description:
        'Cropped preto curto com ajuste perfeito. Sofisticado e moderno para qualquer occasion.',
      color: ColorTypes.BLACK,
      sizes: ['P', 'M', 'G', 'GG'],
      rating: 4.7,
      reviews: 198,
      inStock: true,
      createdDate: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
    },

    // MANGA CURTA
    {
      id: '28',
      name: 'Cropped Amarelo Vibrante Manga Curta',
      price: 84.9,
      originalPrice: 119.9,
      discount: 29,
      imageUrl: 'https://i.pinimg.com/1200x/71/6f/88/716f88e3787b1196db8e0af2f0ffbe4e.jpg',
      category: CategoriesTypes.CROPPEDS,
      subcategory: CroppedsTypes.MANGA_CURTA,
      description:
        'Cropped amarelo vibrante com manga curta. Perfeito para looks descontraídos e alegres.',
      color: ColorTypes.YELLOW,
      sizes: ['P', 'M', 'G', 'GG'],
      rating: 4.5,
      reviews: 145,
      inStock: true,
      createdDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    },
    {
      id: '29',
      name: 'Cropped Rosa Pastel Manga Curta',
      price: 89.9,
      imageUrl: 'https://i.pinimg.com/1200x/dd/eb/db/ddebdba10d6a97dab261b4bb59cadcad.jpg',
      category: CategoriesTypes.CROPPEDS,
      subcategory: CroppedsTypes.MANGA_CURTA,
      description: 'Cropped rosa pastel com manga curta. Delicado e moderno para looks femininos.',
      color: ColorTypes.PINK,
      sizes: ['P', 'M', 'G'],
      rating: 4.6,
      reviews: 112,
      inStock: true,
      createdDate: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
    },

    // ==================== BODYS ====================
    // BÁSICO
    {
      id: '30',
      name: 'Body Preto Básico Premium',
      price: 69.9,
      originalPrice: 99.9,
      discount: 30,
      imageUrl: 'https://i.pinimg.com/736x/a9/48/97/a94897a895faddd2885697df265b48b3.jpg',
      category: CategoriesTypes.BODYS,
      subcategory: BodysTypes.BASICO,
      description:
        'Body preto básico de corte impecável. Essencial para looks sofisticados e elegantes.',
      color: ColorTypes.BLACK,
      sizes: ['P', 'M', 'G', 'GG'],
      rating: 4.7,
      reviews: 334,
      inStock: true,
      createdDate: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
    },
    {
      id: '31',
      name: 'Body Branco Básico Minimalista',
      price: 64.9,
      imageUrl: 'https://i.pinimg.com/1200x/09/17/44/091744aac7cf2dcdd88a3ce53995b224.jpg',
      category: CategoriesTypes.BODYS,
      subcategory: BodysTypes.BASICO,
      description:
        'Body branco básico minimalista.  Versátil para usar por baixo ou como peça principal.',
      color: ColorTypes. WHITE,
      sizes: ['P', 'M', 'G', 'GG', 'XG'],
      rating: 4.6,
      reviews: 267,
      inStock: true,
      createdDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    },

    // MANGA
    {
      id: '32',
      name: 'Body Branco com Decote Manga',
      price: 74.9,
      imageUrl: 'https://i.pinimg.com/1200x/93/99/4c/93994c2fa09a5c403878a15df50e8081.jpg',
      category: CategoriesTypes.BODYS,
      subcategory: BodysTypes.MANGA,
      description:
        'Body branco com decote estratégico e manga. Perfeito para usar por baixo ou sozinho.',
      color: ColorTypes.WHITE,
      sizes: ['P', 'M', 'G', 'GG', 'XG'],
      rating: 4.6,
      reviews: 198,
      inStock: true,
      createdDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    },
    {
      id: '33',
      name: 'Body Preto com Manga Ajustada',
      price: 79.9,
      imageUrl: 'https://i.pinimg.com/1200x/79/74/30/797430dc558b2bb72cfee265fbf35ec4.jpg',
      category: CategoriesTypes.BODYS,
      subcategory: BodysTypes.MANGA,
      description:
        'Body preto com manga ajustada e corte sofisticado. Elegante para eventos formais.',
      color: ColorTypes.BLACK,
      sizes: ['P', 'M', 'G', 'GG'],
      rating: 4.7,
      reviews: 156,
      inStock: true,
      createdDate: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
    },

    // ==================== CALÇADOS ====================
    // TÊNIS
    {
      id: '34',
      name: 'Tênis Branco Clássico Conforto',
      price: 199.9,
      originalPrice: 279.9,
      discount: 29,
      imageUrl: 'https://i.pinimg.com/736x/39/fd/98/39fd986e2f03b726f019039bd39f4cb1.jpg',
      category: CategoriesTypes.CALCADOS,
      subcategory: CalcadosTypes.TENIS,
      description:
        'Tênis branco clássico com tecnologia de conforto. Perfeito para uso diário e esportes.',
      color: ColorTypes.WHITE,
      sizes: ['34', '35', '36', '37', '38', '39', '40', '41'],
      rating: 4.8,
      reviews: 567,
      inStock: true,
      createdDate: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000),
    },
    {
      id: '35',
      name: 'Tênis Preto Premium Esportivo',
      price: 219.9,
      originalPrice: 279.9,
      discount: 21,
      imageUrl: 'https://i.pinimg.com/1200x/d3/d5/53/d3d553ef2aeee88f4f70a9c085f0e6cb.jpg',
      category: CategoriesTypes.CALCADOS,
      subcategory: CalcadosTypes.TENIS,
      description:
        'Tênis preto premium com tecnologia esportiva. Confortável para exercícios e dia a dia.',
      color: ColorTypes.BLACK,
      sizes: ['34', '35', '36', '37', '38', '39', '40', '41'],
      rating: 4.7,
      reviews: 423,
      inStock: true,
      createdDate: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
    },

    // SANDÁLIAS
    {
      id: '36',
      name: 'Sandália Rasteira Preta Confort',
      price: 129.9,
      imageUrl: 'https://i.pinimg.com/1200x/e7/f3/51/e7f351a0917757a440a50f1a38dd87d7.jpg',
      category: CategoriesTypes.CALCADOS,
      subcategory: CalcadosTypes.SANDALIAS,
      description:
        'Sandália rasteira preta elegante e confortável. Ideal para looks casuais e formais.',
      color: ColorTypes.BLACK,
      sizes: ['34', '35', '36', '37', '38', '39', '40', '41'],
      rating: 4.7,
      reviews: 312,
      inStock: true,
      createdDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    },
    {
      id: '37',
      name: 'Sandália Rasteira Dourada Sofisticada',
      price: 139.9,
      originalPrice: 179.9,
      discount: 22,
      imageUrl: 'https://i.pinimg.com/1200x/1d/21/ba/1d21ba6af7e64bc0c78f3224451e83f4.jpg',
      category: CategoriesTypes.CALCADOS,
      subcategory: CalcadosTypes.SANDALIAS,
      description:
        'Sandália rasteira dourada sofisticada. Perfeita para eventos e ocasiões especiais.',
      color: ColorTypes.GOLD,
      sizes: ['34', '35', '36', '37', '38', '39', '40', '41'],
      rating: 4.8,
      reviews: 267,
      inStock: true,
      createdDate: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
    },

    // BOTAS
    {
      id: '38',
      name: 'Bota Marrom Curta Elegante',
      price: 249.9,
      originalPrice: 329.9,
      discount: 24,
      imageUrl: 'https://i.pinimg.com/736x/f2/89/55/f289551e94570dc3cd1ba648009adcd9.jpg',
      category: CategoriesTypes.CALCADOS,
      subcategory: CalcadosTypes.BOTAS,
      description:
        'Bota marrom curta com design elegante. Ideal para inverno e combine com vários looks.',
      color: ColorTypes. BROWN,
      sizes: ['34', '35', '36', '37', '38', '39', '40'],
      rating: 4.8,
      reviews: 289,
      inStock: true,
      createdDate: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
    },
    {
      id: '39',
      name: 'Bota Preta Altura Média Casual',
      price: 229.9,
      imageUrl: 'https://i.pinimg.com/736x/e8/c5/5e/e8c55e59d9e2442bc163f6a09346db18.jpg',
      category: CategoriesTypes.CALCADOS,
      subcategory: CalcadosTypes.BOTAS,
      description:
        'Bota preta altura média com estilo casual moderno. Versátil para qualquer ocasião.',
      color: ColorTypes.BLACK,
      sizes: ['34', '35', '36', '37', '38', '39', '40', '41'],
      rating: 4.7,
      reviews: 234,
      inStock: true,
      createdDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    },

    // ==================== ACESSÓRIOS ====================
    // BOLSAS
    {
      id: '40',
      name: 'Bolsa Tote Preta Grande Espaçosa',
      price: 189.9,
      originalPrice: 249.9,
      discount: 24,
      imageUrl: 'https://i.pinimg.com/736x/21/d3/db/21d3db79afdbc995516e6022f0ad4f2b.jpg',
      category: CategoriesTypes.ACESSORIOS,
      subcategory: AcessoriosTypes.BOLSAS,
      description: 'Bolsa tote preta grande e espaçosa.  Perfeita para trabalho, compras e viagens.',
      color: ColorTypes.BLACK,
      sizes: ['Único'],
      rating: 4.7,
      reviews: 401,
      inStock: true,
      createdDate: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
    },
    {
      id: '41',
      name: 'Bolsa Crossbody Marrom Clássica',
      price: 159.9,
      imageUrl: 'https://i.pinimg.com/1200x/21/41/75/2141759cba1a4cfb988e9aca34dab8e0.jpg',
      category: CategoriesTypes.ACESSORIOS,
      subcategory: AcessoriosTypes.BOLSAS,
      description:
        'Bolsa crossbody marrom clássica.  Versátil para dia e noite, confortável de usar.',
      color: ColorTypes. BROWN,
      sizes: ['Único'],
      rating: 4.6,
      reviews: 267,
      inStock: true,
      createdDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    },

    // ÓCULOS DE SOL
    {
      id: '42',
      name: 'Óculos de Sol Preto Espelhado',
      price: 129.9,
      imageUrl: 'https://i.pinimg.com/736x/3b/70/9c/3b709c2fba20a50f4b0f5914672d54de.jpg',
      category: CategoriesTypes.ACESSORIOS,
      subcategory: AcessoriosTypes.OCULOS_DE_SOL,
      description:
        'Óculos de sol preto com lentes espelhadas. Proteção UV e estilo para dias ensolarados.',
      color: ColorTypes.BLACK,
      sizes: ['Único'],
      rating: 4.6,
      reviews: 278,
      inStock: true,
      createdDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    },
    {
      id: '43',
      name: 'Óculos de Sol Dourado Aviador',
      price: 149.9,
      originalPrice: 189.9,
      discount: 21,
      imageUrl: 'https://i.pinimg.com/1200x/56/cd/6f/56cd6fa439fbc694bbbfcf74f7c6dc45.jpg',
      category: CategoriesTypes.ACESSORIOS,
      subcategory: AcessoriosTypes.OCULOS_DE_SOL,
      description:
        'Óculos de sol dourado estilo aviador clássico. Sofisticado e elegante para qualquer look.',
      color: ColorTypes. GOLD,
      sizes: ['Único'],
      rating: 4.7,
      reviews: 234,
      inStock: true,
      createdDate: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
    },

    // CINTOS
    {
      id: '44',
      name: 'Cinto Dourado Elegante Sofisticado',
      price: 89.9,
      originalPrice: 129.9,
      discount: 31,
      imageUrl: 'https://i.pinimg.com/1200x/f2/ff/55/f2ff556b2e7154e021921969e4fda9ad.jpg',
      category: CategoriesTypes.ACESSORIOS,
      subcategory: AcessoriosTypes.CINTOS,
      description:
        'Cinto dourado com fivela sofisticada. Acessório perfeito para qualquer look elegante.',
      color: ColorTypes.GOLD,
      sizes: ['P', 'M', 'G', 'XG'],
      rating: 4.5,
      reviews: 156,
      inStock: true,
      createdDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    },
    {
      id: '45',
      name: 'Cinto Preto Clássico Versatilidade',
      price: 79.9,
      imageUrl: 'https://i.pinimg.com/736x/26/76/a8/2676a89f88c8297268b17087d36fef21.jpg',
      category: CategoriesTypes.ACESSORIOS,
      subcategory: AcessoriosTypes.CINTOS,
      description:
        'Cinto preto clássico versátil. Essencial para qualquer guarda-roupa, combina com tudo.',
      color: ColorTypes.BLACK,
      sizes: ['P', 'M', 'G', 'XG'],
      rating: 4.6,
      reviews: 198,
      inStock: true,
      createdDate: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
    },
  ];

  getAllProducts(): Observable<Product[]> {
    return of(this.products);
  }

  getProductById(id: string): Observable<Product | undefined> {
    return of(this.products.find((p) => p.id === id));
  }

  getProductsByCategory(category: string): Observable<Product[]> {
    return of(this.products.filter((p) => p.category === category));
  }

  searchProducts(query: string): Observable<Product[]> {
    const lowerQuery = query.toLowerCase();
    return of(
      this.products.filter(
        (p) =>
          p.name. toLowerCase().includes(lowerQuery) ||
          (p.description && p.description. toLowerCase().includes(lowerQuery))
      )
    );
  }

  getProductsBySubcategory(subcategory: string): Observable<Product[]> {
    return of(
      this.products.filter(
        (p) => p. subcategory && p.subcategory.toLowerCase() === subcategory.toLowerCase()
      )
    );
  }

  getProductsByCategoryAndSubcategory(
    category: string,
    subcategory: string
  ): Observable<Product[]> {
    return of(
      this.products.filter(
        (p) =>
          p.category.toLowerCase() === category.toLowerCase() &&
          p.subcategory &&
          p.subcategory. toLowerCase() === subcategory.toLowerCase()
      )
    );
  }

  getAvailableColors(): Observable<string[]> {
    const colors = Array.from(new Set(this.products.map((p) => p.color)));
    return of(colors. sort());
  }

  getColorsByCategory(category: string): Observable<string[]> {
    const colors = Array.from(
      new Set(
        this.products
          .filter((p) => p.category. toLowerCase() === category.toLowerCase())
          .map((p) => p.color)
      )
    );
    return of(colors. sort());
  }

  getProductsByColor(color: string): Observable<Product[]> {
    return of(this.products.filter((p) => p.color. toLowerCase().includes(color.toLowerCase())));
  }
}