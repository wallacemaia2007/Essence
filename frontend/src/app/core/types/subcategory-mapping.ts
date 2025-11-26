export const SUBCATEGORY_SLUG_LABEL_MAP: Record<string, string> = {
  // CROPPEDS
  'curto': 'Curto',
  'longo': 'Longo',
  'manga-curta': 'Manga Curta',
  'manga-longa': 'Manga Longa',
  'sem-manga': 'Sem Manga',

  // VESTIDOS
  'casual': 'Casual',
  'festa': 'Festa',
  'midi': 'Midi',
  'verao': 'Verão',
  'inverno': 'Inverno',
  'justos': 'Justos',
  'soltos': 'Soltos',

  // CAMISETAS
  'basica': 'Básica',
  'estampada': 'Estampada',
  'oversized': 'Oversized',
  'cropped': 'Cropped',
  'malha': 'Malha',
  'tie-dye': 'Tie Dye',
  'bordado': 'Bordado',
  'plus-size': 'Plus Size',

  // CALÇAS
  'jeans': 'Jeans',
  'alfaiataria': 'Alfaiataria',
  'cargo': 'Cargo',
  'legging': 'Legging',
  'pantacourt': 'Pantacourt',
  'flare': 'Flare',
  'wide-leg': 'Wide Leg',
  'jogger': 'Jogger',
  'moletom': 'Moletom',

  // SAIAS
  'plissada': 'Plissada',
  'evase': 'Evasê',
  'lapis': 'Lápis',
  'couro': 'Couro',

  // BODYS
  'saia': 'Saia',
  'babados': 'Babados',
  'manga': 'Manga',
  'estampa': 'Estampa',
  'croche': 'Crochê',

  // ACESSÓRIOS
  'bolsas': 'Bolsas',
  'cintos': 'Cintos',
  'chapeus': 'Chapéus',
  'oculos-de-sol': 'Óculos de Sol',
  'joias': 'Joias',
  'lencos': 'Lenços',
  'relogios': 'Relógios',
  'carteiras': 'Carteiras',

  // CALÇADOS
  'sandalias': 'Sandálias',
  'tenis': 'Tênis',
  'botas': 'Botas',
  'sapatilhas': 'Sapatilhas',
  'salto-baixo': 'Salto Baixo',
  'salto-alto': 'Salto Alto',
  'chinelos': 'Chinelos',
  'mocassins': 'Mocassins',
  'rasteiras': 'Rasteiras',
};

export function getSubcategoryLabel(slug: string): string {
  return SUBCATEGORY_SLUG_LABEL_MAP[slug] || slug;
}