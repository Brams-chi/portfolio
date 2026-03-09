// import { Component, inject } from '@angular/core';
// import { Router } from '@angular/router';
// import { TransitionService } from '../../services/transition.service';
// import { RevealDirective } from '../../shared/directives/reveal.directive';

// @Component({
//   standalone: true,
//   selector: 'app-home',
//   imports: [RevealDirective],
//   templateUrl: './home.component.html',
//   styleUrl: './home.component.scss',
// })

// export class HomeComponent {
//   readonly router      = inject(Router);
//   readonly transitions = inject(TransitionService);

//   readonly stats = [
//     { value: '3+', label: 'Años exp.' },
//     { value: '12+', label: 'Proyectos' },
//     { value: '∞',  label: 'Café' },
//   ];

//   goto(path: string): void {
//     this.transitions.runTransition(() => this.router.navigate([path]));
//   }
// }

import { Component, inject, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { TransitionService } from '../../services/transition.service';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  standalone: true,
  selector: 'app-home',
  encapsulation: ViewEncapsulation.None,
  imports: [RevealDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private router = inject(Router);
  private transitions = inject(TransitionService);

  readonly value = [
    { icon: '🎯', label: 'Diagnóstico tecnológico real', desc: 'Analizamos tus procesos e identificamos dónde la tecnología genera más valor.' },
    { icon: '⚙️', label: 'Soluciones a medida', desc: 'Nada genérico. Cada propuesta está diseñada para tu industria y tamaño.' },
    { icon: '🚀', label: 'Implementación y acompañamiento', desc: 'No te dejamos solo. Acompañamos todo el proceso de adopción tecnológica.' },
    { icon: '🔒', label: 'Seguridad desde el primer día', desc: 'Ciberseguridad y buenas prácticas cloud integradas en cada proyecto.' },
  ];

  readonly stats = [
    { value: '+Valor', label: 'PYMEs asesoradas' },
    { value: '5', label: 'Años de experiencia' },
    { value: 'Alza', label: 'En crecimiento' },
  ];

  goto (path: string): void {
    this.transitions.runTransition(() => this.router.navigate([path]));
  }
}