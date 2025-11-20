import { Component } from '@angular/core';

@Component({
  selector: 'app-saias-drawer',
  imports: [],
  templateUrl: './saias-drawer.html',
  styleUrl: './saias-drawer.scss',
})
export class SaiasDrawer {

    categories = [
    { name: 'Saia Jeans'  },
    { name: 'Saia Midi'  },
    { name: 'Saia Longa'  },
    { name: 'Saia Plissada'  },
    { name: 'Saia Evasê'  },
    { name: 'Saia Lápis'  },
    { name: 'Saia de Couro'  },
    { name: 'Saia Plus Size'  },
  ];

}
