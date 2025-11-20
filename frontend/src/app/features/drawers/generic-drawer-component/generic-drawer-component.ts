import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-generic-drawer-component',
  imports: [],
  templateUrl: './generic-drawer-component.html',
  styleUrl: './generic-drawer-component.scss',
})
export class GenericDrawerContentComponent {
  @Input() title: string = '';
  @Input() categories: DrawerCategory[] = [];
}
