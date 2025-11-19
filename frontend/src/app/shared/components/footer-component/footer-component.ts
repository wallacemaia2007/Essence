import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
      hours: 'Av. Comendador Francisco Avelino Maia, 3014 - Muarama, Passos - MG, 37902-170',
    },
  ];

  institutionalLinks: FooterLink[] = [
    { name: 'Sobre nós', href: '#' },
    { name: 'Como comprar', href: '#' },
    { name: 'Política de privacidade', href: '#' },
    { name: 'Garantias / Trocas', href: '#' },
    { name: 'Feedback dos Clientes', href: '#' },
    { name: 'Blog', href: '#' },
  ];

  helpCenterLinks: FooterLink[] = [
    { name: 'Métodos de envio', href: '#' },
    { name: 'Frete grátis', href: '#' },
    { name: 'Formas de pagamento', href: '#' },
    { name: 'Cancelamento e devolução', href: '#' },
    { name: 'FAQ', href: '#' },
    { name: 'Rastreie seu pedido', href: '#' },
    { name: 'Contato para Suporte', href: '#' },
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

  companyInfo = {
    name: 'Essence Passos',
    cnpj: '27.117.151/0001-80',
  };

  storeAddresses = [
    'Av. Comendador Francisco Avelino Maia, 3014 - Muarama, Passos - MG, 37902-170',
  ];

  registerNewsletter() {
    console.log(this.newsletterName, this.newsletterEmail);
  }
}
