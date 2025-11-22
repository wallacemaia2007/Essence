import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { FilterOptions, FilterState } from '../types/filter-types';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  private filterState = new BehaviorSubject<FilterState>({
    filters: {},
    isLoading: false,
    hasFiltersApplied: false,
  });

  filterState$ = this.filterState.asObservable();

  constructor() {}

  getFilters(): FilterOptions {
    return this.filterState.getValue().filters;
  }

  setFilters(filters: FilterOptions): void {
    const hasFilters = Object.values(filters).some(
      (value) => value !== null && value !== undefined && value !== ''
    );

    this.filterState.next({
      filters,
      isLoading: false,
      hasFiltersApplied: hasFilters,
    });
  }

  resetFilters(): void {
    this.filterState.next({
      filters: {},
      isLoading: false,
      hasFiltersApplied: false,
    });
  }

  updateFilter(key: keyof FilterOptions, value: any): void {
    const current = this.filterState.getValue();
    const updatedFilters = {
      ...current.filters,
      [key]: value,
    };

    this.setFilters(updatedFilters);
  }

  removeFilter(key: keyof FilterOptions): void {
    const current = this.filterState.getValue();
    const { [key]: _, ...rest } = current.filters;

    this.setFilters(rest);
  }

  hasFilters(): boolean {
    return this.filterState.getValue().hasFiltersApplied;
  }
}
