import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { StoreService } from '../../../store/services/store-service';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-component.html',
  styleUrl: './home-component.scss',
})
export class HomeComponent implements OnInit, OnDestroy {
  banners: string[] = [
    'https://img.freepik.com/vetores-gratis/design-de-modelo-de-moda_23-2150368863.jpg?semt=ais_hybrid&w=1300&q=80',
    'https://img.freepik.com/vetores-gratis/cabecalho-de-twitter-de-modelo-de-boutique-minimalista-de-design-plano_23-2149353661.jpg?semt=ais_hybrid&w=1300&q=80',
    'https://img.freepik.com/vetores-gratis/modelo-de-boutique-de-textura-desenhada-a-mao_23-2149322048.jpg?semt=ais_incoming&w=1300&q=80',
  ];
  currentBanner = 0;
  autoplayId: any;
  isPaused = false;

  categoryTeasers = [
    {
      name: 'Vestidos',
      category: 'vestidos',
      image: 'https://i.pinimg.com/736x/4c/0f/83/4c0f834ed308063c9c134b1adb3022c3.jpg',
    },
    {
      name: 'Camisetas',
      category: 'camisetas',
      image: 'https://i.pinimg.com/736x/ff/55/b5/ff55b572cdc9e5c7bcb9e1e46aca153b.jpg',
    },
    {
      name: 'Calças',
      category: 'calcas',
      image: 'https://i.pinimg.com/736x/68/d1/b0/68d1b06d9f140e6bd6f463937088e2a3.jpg',
    },
    {
      name: 'Croppeds',
      category: 'croppeds',
      image: 'https://i.pinimg.com/736x/71/6f/88/716f88e3787b1196db8e0af2f0ffbe4e.jpg',
    },
    {
      name: 'Acessórios',
      category: 'acessorios',
      image: 'https://i.pinimg.com/736x/21/d3/db/21d3db79afdbc995516e6022f0ad4f2b.jpg',
    },
    {
      name: 'Calçados',
      category: 'calcados',
      image: 'https://i.pinimg.com/736x/39/fd/98/39fd986e2f03b726f019039bd39f4cb1.jpg',
    },
    {
      name: 'Jeans',
      category: 'calcas',
      subcategory: 'jeans',
      image: 'https://i.pinimg.com/736x/9f/8c/0d/9f8c0d0c0ade79d924e82b9b8cc84b48.jpg',
    },
    {
      name: 'Moda Trabalho',
      category: 'colecoes',
      subcategory: 'moda-trabalho',
      image: 'https://i.pinimg.com/736x/4c/f3/9e/4cf39e7d1ff107d99e5645152da08d6a.jpg',
    },
  ];

  benefits = [
    { icon: 'pi pi-truck', title: 'Frete Grátis', subtitle: 'Acima de R$249' },
    { icon: 'pi pi-shop', title: 'Loja Oficial', subtitle: 'Qualidade garantida' },
    { icon: 'pi pi-percentage', title: '5% OFF', subtitle: 'No PIX' },
    { icon: 'pi pi-credit-card', title: 'Parcelamento', subtitle: 'Até 6x sem juros' },
  ];

  constructor(private storeService: StoreService, private router: Router) {}

  latestProducts$!: Observable<any[]>;

  ngOnInit(): void {
    this.startAutoplay();
    this.latestProducts$ = this.storeService
      .getAllProducts()
      .pipe(
        map((products) =>
          products
            .sort((a, b) => {
              const dateA = a.createdDate ? new Date(a.createdDate).getTime() : 0;
              const dateB = b.createdDate ? new Date(b.createdDate).getTime() : 0;
              return dateB - dateA;
            })
            .slice(0, 8)
        )
      );
  }

  ngOnDestroy(): void {
    if (this.autoplayId) {
      clearInterval(this.autoplayId);
    }
  }

  startAutoplay() {
    if (this.autoplayId) clearInterval(this.autoplayId);
    this.autoplayId = setInterval(() => {
      if (!this.isPaused) {
        this.nextBanner();
      }
    }, 3000);
  }

  pauseAutoplay() {
    this.isPaused = true;
  }

  resumeAutoplay() {
    this.isPaused = false;
  }

  prevBanner() {
    this.currentBanner = (this.currentBanner - 1 + this.banners.length) % this.banners.length;
  }

  nextBanner() {
    this.currentBanner = (this.currentBanner + 1) % this.banners.length;
  }

  goToStore() {
    this.router.navigate(['/loja']);
  }

  goToNews() {
    this.router.navigate(['/novidades']);
  }

  navigateToCategory(category: string, subcategory?: string) {
    const queryParams: any = { category };
    if (subcategory) {
      queryParams.subcategory = subcategory;
    }
    this.router.navigate(['/loja'], { queryParams });
  }
}
