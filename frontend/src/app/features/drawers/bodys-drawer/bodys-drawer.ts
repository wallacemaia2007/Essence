import { Component } from '@angular/core';

@Component({
  selector: 'app-bodys-drawer',
  imports: [],
  templateUrl: './bodys-drawer.html',
  styleUrl: './bodys-drawer.scss',
})
export class BodysDrawer {

    categories = [
    { name: 'Body Básico/Camisa'  },
    { name: 'Body com Saia'  },
    { name: 'Body com Babados'  },
    { name: 'Body com Manga'  },
    { name: 'Body com Gola'  },
    { name: 'Body com Estampa'  },
    { name: 'Body de Crochê'  },
    { name: 'Body Plus Size'  },
  ];
}
