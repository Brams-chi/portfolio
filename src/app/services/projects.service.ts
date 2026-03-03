import { Injectable, signal, computed } from '@angular/core';
import { Project } from '../models/project.model';

@Injectable({ providedIn: 'root' })
export class ProjectsService {

readonly _projects = signal<Project[]>([
    {
      id: 1,
      number: '01',
      title: 'E-Commerce Platform',
      description: 'Plataforma de comercio electrónico completa con Angular 21, carrito reactivo usando Signals, integración de pagos y panel de administración.',
      tech: ['Angular 21', 'Signals', 'Node.js', 'PostgreSQL'],
      featured: true,
      gradient: 'linear-gradient(135deg,#3A2512,#4E300A,#3A1E08)',
      demoUrl: '#',
      githubUrl: '#',
    },
    {
      id: 2,
      number: '02',
      title: 'Dashboard Analytics',
      description: 'Panel de métricas en tiempo real con gráficos interactivos, filtros dinámicos y exportación de reportes.',
      tech: ['Angular', 'Chart.js', 'Firebase'],
      featured: false,
      gradient: 'linear-gradient(135deg,#3A2512,#1E2C3A)',
      demoUrl: '#',
      githubUrl: '#',
    },
    {
      id: 3,
      number: '03',
      title: 'GymTrain App',
      description: 'Aplicación de seguimiento de entrenamiento con rutinas personalizadas, historial y progresión visual.',
      tech: ['Angular', 'Tailwind', 'Signals'],
      featured: false,
      gradient: 'linear-gradient(135deg,#3A2512,#1E3A22)',
      demoUrl: '#',
      githubUrl: '#',
    },
  ]);

  readonly projects  = this._projects.asReadonly();
  readonly featured  = computed(() => this._projects().find(p => p.featured));
  readonly secondary = computed(() => this._projects().filter(p => !p.featured));
  readonly count     = computed(() => this._projects().length);
}