export interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string; 
  category: string; 
  maxInstallments: number;

  originalPrice?: number;
  description?: string; 
  color?: string; 
  colors?: string[]; 
  sizes?: string[]; 
  subcategory?: string; 
  size?: string; 
  discount?: number;
  reviews?: number;
  inStock?: boolean;
  rating?: number;
  createdDate?: Date;
  slug?: string; 
}

export interface CatalogProduct extends Product {
  imageUrl: string;
  description: string;
  color: string;
  colors?: string[];
  sizes: string[];
  category: string;
  subcategory: string;
}

export interface ProductModalData extends Product {
  imageUrl: string;
}

export interface CartItem extends Product {
  quantity: number;
  variantKey: string;
}

export interface CartSnapshot {
  items: CartItem[];
  totalQuantity: number;
  totalPrice: number;
}
