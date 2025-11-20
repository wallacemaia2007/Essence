import { Component } from '@angular/core';

@Component({
  selector: 'app-croppeds-drawer',
  imports: [],
  templateUrl: './croppeds-drawer.html',
  styleUrl: './croppeds-drawer.scss',
})
export class CroppedsDrawer {

    categories = [
    { name: 'Cropped Básico'  },
    { name: 'Cropped de Malha'  },
    { name: 'Cropped de Algodão'  },
    { name: 'Cropped com Estampa'  },
    { name: 'Cropped de Renda'  },
    { name: 'Cropped de Tricô'  },
    { name: 'Cropped com Amarração'  },
    { name: 'Cropped Plus Size'  },
  ];

}
