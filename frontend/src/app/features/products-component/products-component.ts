import { Component, OnInit } from '@angular/core';
import { Product } from './products-class';
import { ProductService } from './products-service';

@Component({
  selector: 'app-products-component',
  imports: [],
  templateUrl: './products-component.html',
  styleUrl: './products-component.scss',
})
export class ProductsComponent implements OnInit {

  allProducts: Product[] = [];

  constructor(private service: ProductService){}

  ngOnInit(): void {
    this.loadProducts();
  }
  
  loadProducts() {
    this.service.listAll().subscribe((response) => {
      this.allProducts = response;
    });
  }
}
