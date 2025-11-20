import { Component } from '@angular/core';

@Component({
  selector: 'app-vestidos-drawer',
  imports: [],
  templateUrl: './vestidos-drawer.html',
  styleUrl: './vestidos-drawer.scss',
})
export class VestidosDrawer {
  categories = [
    { name: 'Vestidos Casuais' },
    { name: 'Vestidos Longos' },
    { name: 'Vestidos Curtos' },
    { name: 'Vestidos de Festa' },
    { name: 'Vestidos de Verão' },
    { name: 'Vestidos de Inverno' },
    { name: 'Vestidos Midi' },
    { name: 'Vestidos Justos' },
    { name: 'Vestidos Soltos' },

  ];
}
