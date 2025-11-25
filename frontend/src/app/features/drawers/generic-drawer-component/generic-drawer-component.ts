import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DrawerService } from '../../../core/services/drawer-service';

interface DrawerCategory {
  name: string;
}

@Component({
  selector: 'app-generic-drawer-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './generic-drawer-component.html',
  styleUrl: './generic-drawer-component.scss',
})
export class GenericDrawerContentComponent {
  @Input() title: string = '';
  @Input() categories: DrawerCategory[] = [];

  constructor(private router: Router, private drawerService: DrawerService) {}

  onSubcategoryClick(subcategoryName: string): void {
    const slug = subcategoryName
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/_/g, '-')
      .replace(/á/g, 'a')
      .replace(/é/g, 'e')
      .replace(/í/g, 'i')
      .replace(/ó/g, 'o')
      .replace(/ú/g, 'u')
      .replace(/ã/g, 'a')
      .replace(/õ/g, 'o')
      .replace(/ç/g, 'c');

    this.router.navigate(['/loja'], {
      queryParams: {
        category: this.title.toLowerCase(),
        subcategory: slug,
      },
    });
    this.drawerService.close();
  }
}