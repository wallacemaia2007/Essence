import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawerService } from '../../../core/services/drawer-service';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
import { DrawerType } from '../../../core/types/drawers-types';

import { VestidosDrawer } from '../../../features/drawers/vestidos-drawer/vestidos-drawer';
import { AcessoriosDrawer } from '../../../features/drawers/acessorios-drawer/acessorios-drawer';

const DRAWER_COMPONENTS: Record<string, any> = {
  [DrawerType.VESTIDOS]: VestidosDrawer,
  [DrawerType.ACESSORIOS]: AcessoriosDrawer,
};

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

    const componentType = DRAWER_COMPONENTS[drawerType];

    if (componentType) {
      this.dynamicContainer.createComponent(componentType);
    }
  }

  onClose(): void {
    this.drawerService.close();
  }
}
