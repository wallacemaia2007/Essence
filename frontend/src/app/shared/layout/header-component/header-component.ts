import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DrawerService } from '../../../core/services/drawer-service';
import { DrawerType } from '../../../core/types/drawers-types';

@Component({
  selector: 'app-header-component',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './header-component.html',
  styleUrl: './header-component.scss',
})
export class HeaderComponent {

  constructor(private router: Router, private drawerService: DrawerService) {}

  categories = [
    DrawerType.VESTIDOS,
    DrawerType.ACESSORIOS,
    DrawerType.CROPPEDS,
    DrawerType.CAMISETAS,
    DrawerType.CALCAS,
  ];

  cartItemCount = 1;

  onSearch() {
  }

  onFavorites() {
  }

  onCart() {
  }

  home() {
    this.router.navigate(['/']);
  }

  openDrawer(categoryName: string) {
    this.drawerService.open(categoryName);
    
  }
}

