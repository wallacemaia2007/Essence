import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DrawerService {
  private drawerState = new BehaviorSubject<{
    isOpen: boolean;
    type: string | null;
  }>({
    isOpen: false,
    type: null,
  });

  drawerState$ = this.drawerState.asObservable();

  private normalizeDrawerType(drawerType: string): string {
    return drawerType.toLowerCase().trim();
  }

  open(drawerType: string): void {
    const normalizedType = this.normalizeDrawerType(drawerType);
    this.drawerState.next({ isOpen: true, type: normalizedType });
  }

  close(): void {
    this. drawerState.next({ isOpen: false, type: null });
  }
}