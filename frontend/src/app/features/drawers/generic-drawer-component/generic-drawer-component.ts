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
  styleUrls: ['./generic-drawer-component.scss'],
})
export class GenericDrawerContentComponent {
  @Input() title: string = '';
  @Input() categories: DrawerCategory[] = [];

  constructor(private router: Router, private drawerService: DrawerService) {}

  onSubcategoryClick(subcategoryName: string): void {
    const slug = subcategoryName.toLowerCase().replace(/\s+/g, '-');

    const categorySlug = this.removeAccents(this.title).toLowerCase();

    this.router.navigate(['/loja'], {
      queryParams: {
        category: categorySlug,
        subcategory: slug,
      },
      queryParamsHandling: 'merge',
    });

    this.drawerService.close();
  }

  private removeAccents(text: string): string {
    return text
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '') 
      .replace(/ç/g, 'c') 
      .replace(/Ç/g, 'C'); 
  }
}
