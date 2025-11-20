export interface DrawerConfig {
  title: string;
  categories: { name: string }[];
}

export const DRAWER_CONFIGS: Record<string, DrawerConfig> = {
  vestidos: {
    title: 'Vestidos',
    categories: [
      { name: 'Vestidos Casuais' },
      { name: 'Vestidos Longos' },
      { name: 'Vestidos Curtos' },
      { name: 'Vestidos de Festa' },
      { name: 'Vestidos de Verão' },
      { name: 'Vestidos de Inverno' },
      { name: 'Vestidos Midi' },
      { name: 'Vestidos Justos' },
      { name: 'Vestidos Soltos' },
    ],
  },

  acessorios: {
    title: 'Acessórios',
    categories: [
      { name: 'Bolsas' },
      { name: 'Cintos' },
      { name: 'Chapéus' },
      { name: 'Óculos de Sol' },
      { name: 'Bijuterias' },
      { name: 'Lenços' },
      { name: 'Relógios' },
      { name: 'Carteiras' },
    ],
  },

  croppeds: {
    title: 'Cropped',
    categories: [
      { name: 'Cropped Básico' },
      { name: 'Cropped de Malha' },
      { name: 'Cropped de Algodão' },
      { name: 'Cropped com Estampa' },
      { name: 'Cropped de Renda' },
      { name: 'Cropped de Tricô' },
      { name: 'Cropped com Amarração' },
      { name: 'Cropped Plus Size' },
    ],
  },

  camisetas: {
    title: 'Camisetas',
    categories: [
      { name: 'Camiseta Básica' },
      { name: 'Camiseta Estampada' },
      { name: 'Camiseta Oversized' },
      { name: 'Camiseta Cropped' },
      { name: 'Camiseta de Algodão Orgânico' },
      { name: 'Camiseta Tie-Dye' },
      { name: 'Camiseta com Bordado' },
      { name: 'Camiseta Plus Size' },
    ],
  },

  calcas: {
    title: 'Calças',
    categories: [
      { name: 'Calça Jeans' },
      { name: 'Calça de Alfaiataria' },
      { name: 'Calça Cargo' },
      { name: 'Calça Legging' },
      { name: 'Calça Pantacourt' },
      { name: 'Calça Flare' },
      { name: 'Calça Wide Leg' },
      { name: 'Calça Jogger' },
    ],
  },

  saias: {
    title: 'Saias',
    categories: [
      { name: 'Saia Jeans' },
      { name: 'Saia Midi' },
      { name: 'Saia Longa' },
      { name: 'Saia Plissada' },
      { name: 'Saia Evasê' },
      { name: 'Saia Lápis' },
      { name: 'Saia de Couro' },
      { name: 'Saia Plus Size' },
    ],
  },

  bodys: {
    title: 'Bodys',
    categories: [
      { name: 'Body Básico/Camisa' },
      { name: 'Body com Saia' },
      { name: 'Body com Babados' },
      { name: 'Body com Manga' },
      { name: 'Body com Gola' },
      { name: 'Body com Estampa' },
      { name: 'Body de Crochê' },
      { name: 'Body Plus Size' },
    ],
  },

  calçados: {
    title: 'Calçados',
    categories: [
      { name: 'Sandálias' },
      { name: 'Tênis' },
      { name: 'Botas' },
      { name: 'Sapatilhas' },
      { name: 'Saltos Altos' },
      { name: 'Chinelos' },
      { name: 'Mocassins' },
      { name: 'Rasteirinhas' },
    ],
  },
};
