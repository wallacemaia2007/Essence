import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StroreService } from '../store/services/store-service';
import { Subscription, combineLatest } from 'rxjs';
import { FavoriteService } from '../../core/services/favorite-service';

@Component({
  selector: 'app-favorites-component',
  imports: [CommonModule],
  templateUrl: './favorites-component.html',
  styleUrl: './favorites-component.scss',
})
export class FavoritesComponent implements OnInit, OnDestroy {
  favoriteProducts: any[] = [];
  private sub?: Subscription;

  constructor(
    private favoriteService: FavoriteService,
    private storeService: StroreService
  ) {}

  ngOnInit(): void {
    this.sub = combineLatest([
      this.storeService.getAllProducts(),
      this.favoriteService.favoritesIds$,
    ]).subscribe(([allProducts, favIds]) => {
      this.favoriteProducts = allProducts.filter((p) => favIds.has(p.id));
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  remove(productId: string): void {
    this.favoriteService.remove(productId);
  }
}
