// import { Component } from '@angular/core';
// import { RevealDirective } from '../../shared/directives/reveal.directive';
// import { Experience } from '../../models/skill.model';

// @Component({
//   standalone: true,
//   selector: 'app-about',
//   imports: [RevealDirective],
//   templateUrl: './about.component.html',
//   styleUrl: './about.component.scss',
// })
// export class AboutComponent {
//   readonly quickInfo = [
//     { label: 'Ubicación',       value: 'Chile 🇨🇱' },
//     { label: 'Especialidad',    value: 'Frontend' },
//     { label: 'Disponibilidad',  value: 'Abierto', color: '#4ade80' },
//   ];

//   readonly experience: Experience[] = [
//     {
//       period: '2023 — Presente',
//       role: 'Senior Frontend Developer',
//       company: 'Empresa XYZ — Santiago, Chile',
//       description: 'Liderazgo técnico del equipo frontend, arquitectura de micro-frontends con Angular 21 y optimización de performance.',
//     },
//     {
//       period: '2021 — 2023',
//       role: 'Frontend Developer',
//       company: 'Startup ABC — Remoto',
//       description: 'Desarrollo de SPA con Angular, integración de APIs REST y GraphQL, implementación de design systems.',
//     },
//     {
//       period: '2020 — 2021',
//       role: 'Junior Developer',
//       company: 'Agencia Digital — Santiago, Chile',
//       description: 'Desarrollo web con HTML, CSS, JavaScript y primeros pasos con frameworks modernos.',
//     },
//   ];
// }
import { Component, ViewEncapsulation } from '@angular/core';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  standalone: true,
  selector: 'app-about',
  encapsulation: ViewEncapsulation.None,
  imports: [RevealDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {

  readonly valores = [
    { icon: '💡', label: 'Claridad',     desc: 'Comunicamos sin tecnicismos innecesarios.' },
    { icon: '🤝', label: 'Compromiso',   desc: 'Tu éxito es nuestro éxito.' },
    { icon: '📐', label: 'Rigor',        desc: 'Análisis profundo antes de cualquier solución.' },
    { icon: '🔄', label: 'Adaptabilidad',desc: 'Metodologías ágiles para resultados rápidos.' },
  ];

  readonly info = [
    { label: 'Fundación',     value: '2022' },
    { label: 'Sede',          value: 'Chile 🇨🇱' },
    { label: 'Modalidad',     value: 'Presencial + Remoto' },
    { label: 'Estado',        value: 'Activo', color: '#4ade80' },
  ];

  readonly areas = [
    {
      icon: '🧠',
      title: 'Consultoría Estratégica',
      desc: 'Diagnóstico tecnológico, análisis de procesos, diseño de arquitectura empresarial y hoja de ruta de transformación digital.',
    },
    {
      icon: '💻',
      title: 'Desarrollo de Software',
      desc: 'Aplicaciones web frontend y backend, APIs REST, e-commerce, landing pages, portafolios y software a medida.',
    },
    {
      icon: '☁️',
      title: 'Cloud & Ciberseguridad',
      desc: 'Infraestructura AWS, migración a la nube, hardening de sistemas, auditorías de seguridad y cumplimiento normativo.',
    },
    {
      icon: '📊',
      title: 'Análisis & Datos',
      desc: 'Levantamiento de requerimientos, modelado de datos, flujos de trabajo y propuestas de valor basadas en evidencia.',
    },
    {
      icon: '🔧',
      title: 'Integración de Sistemas',
      desc: 'Conectamos tus herramientas actuales — CRM, ERP, pasarelas de pago — en un ecosistema cohesionado.',
    },
    {
      icon: '📱',
      title: 'UX & Diseño',
      desc: 'Interfaces intuitivas, accesibles y alineadas con la identidad de tu marca. Del wireframe al producto final.',
    },
  ];
}