
// import { Component, inject } from '@angular/core';
// import { ProjectsService } from '../../services/projects.service';
// import { RevealDirective } from '../../shared/directives/reveal.directive';

// @Component({
//   standalone: true,
//   selector: 'app-projects',
//   imports: [RevealDirective],
//   templateUrl: './projects.component.html',
//   styleUrl: './projects.component.scss',
// })
// export class ProjectsComponent {
//   readonly svc = inject(ProjectsService);
// }

import { Component, inject, signal, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { TransitionService } from '../../services/transition.service';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  standalone: true,
  selector: 'app-projects',
  encapsulation: ViewEncapsulation.None,
  imports: [RevealDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  private router      = inject(Router);
  private transitions = inject(TransitionService);

  readonly activeTab = signal<'consultoria' | 'software' | 'completo'>('consultoria');

  readonly servicios = {
    consultoria: {
      number: '01',
      badge: 'Asesoría Técnica',
      gradient: 'linear-gradient(135deg,#3A2512,#4E1E08,#3A1205)',
      title: 'Consultoría & Aceleración',
      description: 'Analizamos tu empresa desde adentro: procesos, sistemas actuales y oportunidades de mejora. Entregamos un diagnóstico completo y una hoja de ruta tecnológica ejecutable.',
      incluye: [
        'Diagnóstico tecnológico AS-IS / TO-BE',
        'Análisis de procesos y flujos de trabajo',
        'Propuesta de valor con ROI estimado',
        'Selección y evaluación de tecnologías',
        'Roadmap de implementación priorizado',
        'Informe ejecutivo + presentación',
      ],
      tech: ['Análisis de Procesos', 'Arquitectura de Sistemas', 'Cloud AWS', 'Ciberseguridad'],
      ideal: 'Empresas que quieren modernizarse pero no saben por dónde empezar.',
      cta: 'Solicitar diagnóstico',
    },
    software: {
      number: '02',
      badge: 'Desarrollo de Software',
      gradient: 'linear-gradient(135deg,#3A2512,#1E2C3A,#0A1E2C)',
      title: 'Desarrollo Web a Medida',
      description: 'Construimos el software que tu negocio necesita: desde una landing page profesional hasta un e-commerce completo o una aplicación web a medida con backend robusto.',
      incluye: [
        'Landing pages y sitios corporativos',
        'Portafolios profesionales y personales',
        'E-commerce con carrito y pagos',
        'Aplicaciones web (SaaS, CRM, ERP)',
        'APIs REST y microservicios',
        'Despliegue en cloud (AWS / Vercel)',
      ],
      tech: ['Angular', 'React', 'Node.js', 'PostgreSQL', 'AWS', 'TypeScript'],
      ideal: 'Empresas que necesitan presencia digital o automatizar procesos internos.',
      cta: 'Cotizar proyecto',
    },
    completo: {
      number: '03',
      badge: 'Todo Incluido',
      gradient: 'linear-gradient(135deg,#3A2512,#1E3A22,#0A2210)',
      title: 'Asesoría + Desarrollo Integral',
      description: 'El paquete completo: partimos desde el análisis estratégico, diseñamos la solución óptima y la construimos. Un solo proveedor, responsabilidad total del proceso.',
      incluye: [
        'Todo lo de Consultoría',
        'Todo lo de Desarrollo de Software',
        'Diseño UX/UI y prototipado',
        'Gestión de proyecto ágil',
        'Capacitación al equipo',
        'Soporte post-lanzamiento (3 meses)',
      ],
      tech: ['Full Stack', 'Cloud AWS', 'Ciberseguridad', 'UX/UI', 'Metodología Ágil'],
      ideal: 'Empresas que quieren delegar completamente su transformación tecnológica.',
      cta: 'Hablar con un experto',
    },
  };

  get servicio() {
    return this.servicios[this.activeTab()];
  }

  goto(path: string): void {
    this.transitions.runTransition(() => this.router.navigate([path]));
  }
}