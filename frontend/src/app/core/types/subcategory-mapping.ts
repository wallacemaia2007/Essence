export const SUBCATEGORY_SLUG_MAP: Record<string, string> = {
  casual: 'Casual',
  festa: 'Festa',
  longo: 'Longo',
  curto: 'Curto',
  midi: 'Midi',

  basica: 'Básica',
  estampada: 'Estampada',
  oversized: 'Oversized',

  jeans: 'Jeans',
  legging: 'Legging',
  cargo: 'Cargo',

  plissada: 'Plissada',

  'manga-curta': 'Manga Curta',

  basico: 'Básico',
  manga: 'Manga',

  tenis: 'Tênis',
  sandalias: 'Sandálias',
  botas: 'Botas',

  bolsas: 'Bolsas',
  cintos: 'Cintos',
  'oculos-de-sol': 'Oculos de sol',
  chapeus: 'Chapeus',
  joias: 'Joias',
  lencos: 'Lenços',
  relogios: 'Relogios',
  carteiras: 'Carteiras',
};

export function slugToSubcategory(slug: string): string {
  const converted = SUBCATEGORY_SLUG_MAP[slug.toLowerCase().trim()];
  
  if (!converted) {
    return slug; 
  }
  
  return converted;
}

export function subcategoryToSlug(subcategory: string): string {
  return subcategory
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')    
    .replace(/á/g, 'a')       
    .replace(/é/g, 'e')
    .replace(/í/g, 'i')
    .replace(/ó/g, 'o')
    . replace(/ú/g, 'u')
    .replace(/ã/g, 'a')
    .replace(/õ/g, 'o')
    .replace(/ç/g, 'c');
}