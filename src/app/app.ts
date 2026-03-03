import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar';
import { FooterComponent } from './shared/components/footer/footer';
import { PageTransitionComponent } from './shared/components/page-transition/page-transition';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NavbarComponent,
    FooterComponent,
    PageTransitionComponent,
  ],
  template: `
    <!-- Navbar fijo -->
    <app-navbar />

    <!-- Contenido de cada ruta -->
    <main>
      <router-outlet />
    </main>

    <!-- Footer -->
    <app-footer />

    <!-- Cortina de transición (siempre encima) -->
    <app-page-transition />
  `,
  styles: [`
    :host { display: block; }
    main  { min-height: 100vh; }
  `],
})
export class AppComponent {}