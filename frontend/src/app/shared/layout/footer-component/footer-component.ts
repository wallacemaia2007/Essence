import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer-component',
  imports: [CommonModule, FormsModule],
  templateUrl: './footer-component.html',
  styleUrl: './footer-component.scss',
})
export class FooterComponent {
  newsletterName = '';
  newsletterEmail = '';
  currentYear: number = new Date().getFullYear();

  constructor(private router: Router) {}

  contactInfo: ContactInfo[] = [
    {
      label: 'Email',
      value: 'contato@essence.com',
    },
    {
      label: 'Telefone',
      value: '(35) 99205-0341',
    },
    {
      label: 'Horário de Atendimento',
      value: 'Segunda a Sexta: 9:00 às 18:00',
    },
  ];

  physicalStores: Store[] = [
    {
      name: 'Passos',
      address: 'Av. Comendador Francisco Avelino Maia, 3014 - Muarama, Passos - MG, 37902-170',
    },
  ];

  productLinks: FooterLink[] = [
    { name: 'Catálogo', href: '/store' },
    { name: 'Novidades', href: '/news' },
    { name: 'Promoções', href: '/promotions' },
    { name: 'Marcas', href: '/brands' },
    { name: 'Avaliações', href: '/reviews' },
  ];

  helpCenterLinks: FooterLink[] = [
    { name: 'Central de Ajuda', href: '/help-center' },
    { name: 'Rastreie seu Pedido', href: '/track-order' },
    { name: 'Formas de Pagamento', href: '/payment-methods' },
    { name: 'Métodos de Envio', href: '/shipping-methods' },
    { name: 'Devolução & Reembolso', href: '/returns-refunds' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contato para Suporte', href: '/support-contact' },
  ];

  policiesLinks: FooterLink[] = [
    { name: 'Política de Privacidade', href: '/privacy-policy' },
    { name: 'Termos de Serviço', href: '/terms-of-service' },
    { name: 'Política de Cookies', href: '/cookie-policy' },
    { name: 'LGPD & Dados Pessoais', href: '/lgpd' },
    { name: 'Sobre Nós', href: '/about-us' },
  ];

  socialMedia: SocialMedia[] = [
    {
      name: 'Instagram',
      icon: 'assets/icons/instagram.svg',
      href: 'https://www.instagram.com/essencepassos/',
    },
    {
      name: 'Facebook',
      icon: 'assets/icons/facebook.svg',
      href: 'https://www.facebook.com/essence.passos/?locale=pt_BR',
    },
    {
      name: 'Whatsapp',
      icon: 'assets/icons/whatzapp.svg',
      href: 'https://wa.me/553592050341?text=Ol%C3%A1,%20vim%20pelo%20site%20Essence%20Passos,%20gostaria%20de%20saber%20mais%20sobre%20a%20loja!',
    },
  ];

  paymentMethods: PaymentMethod[] = [
    { name: 'Visa', icon: 'assets/icons/visa.svg' },
    { name: 'Mastercard', icon: 'assets/icons/mastercard.svg' },
    { name: 'Elo', icon: 'assets/icons/elo.svg' },
    { name: 'Pix', icon: 'assets/icons/pix.svg' },
    { name: 'Boleto', icon: 'assets/icons/boleto.svg' },
  ];

  companyInfo = {
    name: 'Essence Passos',
    cnpj: '27.117.151/0001-80',
  };

  registerNewsletter() {
    if (this.newsletterEmail && this.newsletterName) {
      console.log('Newsletter inscrito:', {
        name: this.newsletterName,
        email: this.newsletterEmail,
      });
      this.newsletterEmail = '';
      this.newsletterName = '';
    }
  }

  storeTerms() {
    this.router.navigate(['/terms-of-service']);
  }

  catalogLinks(href: string) {
    this.router.navigate(['/'+ href]);
  }

}
