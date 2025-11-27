import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FavoriteService {
  
  private readonly STORAGE_KEY = 'favoritesIds';
  private favoritesSet: Set<string> = new Set();
  private favoritesSubject = new BehaviorSubject<Set<string>>(new Set());

  favoritesIds$ = this.favoritesSubject.asObservable();

  constructor() {
    this.loadFromStorage();
  }

  private loadFromStorage(): void {
    try {
      const raw = localStorage.getItem(this.STORAGE_KEY);
      if (raw) {
        const arr: string[] = JSON.parse(raw);
        this.favoritesSet = new Set(arr);
        this.emit();
      }
    } catch {}
  }

  private persist(): void {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(Array.from(this.favoritesSet)));
    } catch {}
  }

  private emit(): void {
    this.favoritesSubject.next(new Set(this.favoritesSet));
  }

  toggle(productId: string): void {
    if (this.favoritesSet.has(productId)) {
      this.favoritesSet.delete(productId);
    } else {
      this.favoritesSet.add(productId);
    }
    this.persist();
    this.emit();
  }

  remove(productId: string): void {
    if (this.favoritesSet.delete(productId)) {
      this.persist();
      this.emit();
    }
  }

  clear(): void {
    this.favoritesSet.clear();
    this.persist();
    this.emit();
  }

  isFavorite(productId: string): boolean {
    return this.favoritesSet.has(productId);
  }
}