import { Injectable } from '@angular/core';
import { SlugNormalizerService } from './slug-normalize-service';

@Injectable({
  providedIn: 'root',
})
export class FilterHelperService {
  constructor(private slugNormalizer: SlugNormalizerService) {}

  compareSubcategories(productSubcategory: string, queryParamSubcategory: string): boolean {
    const productSlug = this.slugNormalizer.toSlug(productSubcategory);
    const paramSlug = this.slugNormalizer.toSlug(queryParamSubcategory);
    return productSlug === paramSlug;
  }

  filterBySubcategory(
    products: any[],
    category: string,
    subcategory: string
  ): any[] {
    if (!subcategory) return products;

    const normalizedCategory = this.slugNormalizer.toSlug(category);
    const normalizedSubcategory = this.slugNormalizer.toSlug(subcategory);

    return products.filter((product) => {
      const productCategory = this.slugNormalizer.toSlug(product.category);
      const productSubcategory = this.slugNormalizer.toSlug(product.subcategory);

      return (
        productCategory === normalizedCategory &&
        productSubcategory === normalizedSubcategory
      );
    });
  }

  filterByCategory(products: any[], category: string): any[] {
    if (!category) return products;

    const normalizedCategory = this.slugNormalizer. toSlug(category);
    return products.filter((product) => {
      const productCategory = this. slugNormalizer.toSlug(product.category);
      return productCategory === normalizedCategory;
    });
  }
}