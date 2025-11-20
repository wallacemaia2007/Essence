import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-generic-drawer-component',
  imports: [],
  templateUrl: './generic-drawer-component.html',
  styleUrl: './generic-drawer-component.scss',
})
export class GenericDrawerContentComponent {
  @Input() title: string = '';
  @Input() categories: DrawerCategory[] = [];

  constructor(private router: Router) {}


  youtube(){
    this.router.navigate(['https://www.youtube.com/']);
  }
}
