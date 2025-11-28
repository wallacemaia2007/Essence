import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductModalData } from '../models/product-interfaces';

@Injectable({ providedIn: 'root' })
export class ProductModalService {
  private productSubject = new BehaviorSubject<ProductModalData | null>(null);
  private openSubject = new BehaviorSubject<boolean>(false);

  product$ = this.productSubject.asObservable();
  isOpen$ = this.openSubject.asObservable();

  open(product: ProductModalData): void {
    this.productSubject.next(product);
    this.openSubject.next(true);
  }

  close(): void {
    this.openSubject.next(false);
    setTimeout(() => this.productSubject.next(null), 150);
  }
}
