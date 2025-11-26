import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawerService } from '../../../core/services/drawer-service';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
import { GenericDrawerContentComponent } from '../../../features/drawers/generic-drawer-component/generic-drawer-component';
import { DRAWER_CONFIGS } from '../../../features/drawers/drawer-config';

@Component({
  selector: 'app-generic-drawer',
  standalone: true,
  imports: [CommonModule, DrawerModule, ButtonModule],
  templateUrl: './generic-drawer.html',
  styleUrl: './generic-drawer.scss',
})
export class GenericDrawerComponent implements OnInit {
  @ViewChild('dynamicContainer', { read: ViewContainerRef })
  dynamicContainer!: ViewContainerRef;

  visible = false;
  currentDrawerType: string | null = null;

  constructor(private drawerService: DrawerService) {}

  ngOnInit(): void {
    this.drawerService.drawerState$.subscribe((state) => {
      this.visible = state.isOpen;
      this.currentDrawerType = state.type;

      if (state.isOpen && state.type) {
        this.loadDrawerComponent(state.type);
      }
    });
  }

  private loadDrawerComponent(drawerType: string): void {
    this.dynamicContainer.clear();
    const normalizedType = drawerType.toLowerCase().trim();
    const config = DRAWER_CONFIGS[normalizedType];

    if (!config) {
      return;
    }
    const componentRef = this.dynamicContainer.createComponent(GenericDrawerContentComponent);
    componentRef.instance.title = config.title;
    componentRef.instance.categories = config.categories;
    componentRef.instance.categoryType = config.categoryType; 
  }

  onClose(): void {
    this.drawerService.close();
  }
}
