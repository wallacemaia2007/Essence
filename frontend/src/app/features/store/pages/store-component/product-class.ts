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