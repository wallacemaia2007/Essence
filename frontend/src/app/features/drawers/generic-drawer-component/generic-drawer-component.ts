import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {}

  onSubcategoryClick(subcategoryName: string): void {
    const slug = subcategoryName.toLowerCase().replace(/\s+/g, '-').replace(/_/g, '-');

    this.router.navigate(['/produtos'], {
      queryParams: {
        subcategory: slug,
        category: this.title.toLowerCase(),
      },
    });
  }
}
