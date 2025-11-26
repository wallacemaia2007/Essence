import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SlugNormalizerService {
  toSlug(text: string): string {
    if (!text) return '';

    return text
      .toLowerCase()
      .trim()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/ç/g, 'c')
      .replace(/Ç/g, 'c')
      .replace(/\s+/g, '-')
      .replace(/[^\w-]/g, '')
      .replace(/-+/g, '-')
      .replace(/^-+|-+$/g, '');
  }

  isValidSlug(slug: string): boolean {
    return /^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug);
  }
}
