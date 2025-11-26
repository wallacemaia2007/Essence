import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DrawerService } from '../../../core/services/drawer-service';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { SlugNormalizerService } from '../../../core/services/slug-normalize-service';

@Component({
  selector: 'app-generic-drawer-content',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './generic-drawer-component.html',
  styleUrls: ['./generic-drawer-component.scss'],
})
export class GenericDrawerContentComponent {
  @Input() title: string = '';
  @Input() categories: DrawerCategory[] = [];
  @Input() categoryType?: string; 

  constructor(
    private router: Router,
    private drawerService: DrawerService,
    private slugService: SlugNormalizerService
  ) {}

  onSubcategoryClick(category: DrawerCategory): void {
    let categorySlug = this.categoryType || this.slugService.toSlug(this.title);

    this.router.navigate(['/loja'], {
      queryParams: {
        category: categorySlug,
        subcategory: category.slug,
      },
      queryParamsHandling: 'merge',
    });

    this.drawerService.close();
  }
}