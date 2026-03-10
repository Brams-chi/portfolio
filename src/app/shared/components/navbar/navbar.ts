import { Component, inject, signal, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { TransitionService } from '../../../services/transition.service';
import { LogoComponent } from '../logo-component/logo-component';

@Component({
  standalone: true,
  selector: 'app-navbar',
  imports: [LogoComponent],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss'],
})
export class NavbarComponent {
  readonly router = inject(Router);
  readonly transitions = inject(TransitionService);

  readonly menuOpen = signal(false);

  readonly links = [
    { path: '/', label: 'Inicio' },
    { path: '/about', label: 'Nosotros' },
    { path: '/skills', label: 'Metodologias' },
    { path: '/projects', label: 'Servicios' },
  ];

  toggleMenu (): void { this.menuOpen.update(v => !v); }
  closeMenu (): void { this.menuOpen.set(false); }

  // Cierra el sidebar con Escape
  @HostListener('document:keydown.escape')
  onEscape (): void { this.closeMenu(); }

  goto (path: string): void {
    if (this.router.url === path) return;
    this.transitions.runTransition(() => this.router.navigate([path]));
  }

  gotoAndClose (path: string): void {
    this.closeMenu();
    if (this.router.url === path) return;
    setTimeout(() => {
      this.transitions.runTransition(() => this.router.navigate([path]));
    }, 300); // espera que el sidebar cierre antes de la transición
  }

  isActive (path: string): boolean {
    if (path === '/') return this.router.url === '/';
    return this.router.url.startsWith(path);
  }
}