import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DrawerService } from '../../../core/services/drawer-service';

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
    const slug = subcategoryName.toLowerCase().replace(/\s+/g, '-').replace(/_/g, '-');

    this.router.navigate(['/loja'], {
      queryParams: {
        category: this.title.toLowerCase(),
        subcategory: slug,
      },
    });
    this.drawerService.close();
  }
}
