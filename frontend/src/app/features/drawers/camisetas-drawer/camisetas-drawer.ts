import { Component } from '@angular/core';

@Component({
  selector: 'app-camisetas-drawer',
  imports: [],
  templateUrl: './camisetas-drawer.html',
  styleUrl: './camisetas-drawer.scss',
})
export class CamisetasDrawer {

    categories = [
    { name: 'Camiseta Básica'  },
    { name: 'Camiseta Estampada'  },
    { name: 'Camiseta Oversized'  },
    { name: 'Camiseta Cropped'  },
    { name: 'Camiseta de Algodão Orgânico'  },
    { name: 'Camiseta Tie-Dye'  },
    { name: 'Camiseta com Bordado'  },
    { name: 'Camiseta Plus Size'  },
  ];

}
