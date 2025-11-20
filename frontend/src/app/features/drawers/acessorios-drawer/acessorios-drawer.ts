import { Component } from '@angular/core';

@Component({
  selector: 'app-acessorios-drawer',
  imports: [],
  templateUrl: './acessorios-drawer.html',
  styleUrl: './acessorios-drawer.scss',
})
export class AcessoriosDrawer {
  categories = [
    { name: 'Bolsas'},
    { name: 'Cintos'},
    { name: 'Chapéus'},
    { name: 'Óculos de Sol'},
    { name: 'Bijuterias'},
    { name: 'Lenços'},
    { name: 'Relógios'},
    { name: 'Carteiras'},
  ];

}
