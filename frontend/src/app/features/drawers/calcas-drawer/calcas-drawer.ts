import { Component } from '@angular/core';

@Component({
  selector: 'app-calcas-drawer',
  imports: [],
  templateUrl: './calcas-drawer.html',
  styleUrl: './calcas-drawer.scss',
})
export class CalcasDrawer {

    categories = [
    { name: 'Calça Jeans'  },
    { name: 'Calça de Alfaiataria'  },
    { name: 'Calça Cargo'  },
    { name: 'Calça Legging'  },
    { name: 'Calça Pantacourt'  },
    { name: 'Calça Flare'  },
    { name: 'Calça Wide Leg'  },
    { name: 'Calça Jogger'  },
  ];

}
