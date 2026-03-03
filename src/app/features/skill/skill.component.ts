// import { Component } from '@angular/core';
// import { RevealDirective } from '../../shared/directives/reveal.directive';
// import { SkillBlock } from '../../models/skill.model';

// @Component({
//   standalone: true,
//   selector: 'app-skills',
//   imports: [RevealDirective],
//   templateUrl: './skill.component.html',
//   styleUrl: './skill.component.scss',
// })
// export class SkillsComponent {
//   readonly skillBlocks: SkillBlock[] = [
//     {
//       icon: '⚡',
//       title: 'Frontend',
//       skills: [
//         { name: 'Angular',      level: 95 },
//         { name: 'TypeScript',   level: 90 },
//         { name: 'React',        level: 75 },
//         { name: 'Tailwind CSS', level: 88 },
//       ],
//       tags: ['RxJS', 'NgRx', 'Signals', 'SCSS'],
//     },
//     {
//       icon: '🔗',
//       title: 'Backend / APIs',
//       skills: [
//         { name: 'Node.js',   level: 70 },
//         { name: 'REST APIs', level: 88 },
//         { name: 'GraphQL',   level: 65 },
//         { name: 'Firebase',  level: 72 },
//       ],
//       tags: ['Express', 'PostgreSQL', 'MongoDB'],
//     },
//     {
//       icon: '🛠',
//       title: 'Tooling & DevOps',
//       skills: [
//         { name: 'Git / GitHub',    level: 92 },
//         { name: 'Docker',          level: 60 },
//         { name: 'CI/CD',           level: 70 },
//         { name: 'Testing (Vitest)', level: 78 },
//       ],
//       tags: ['Vercel', 'Figma', 'VS Code', 'Linux'],
//     },
//   ];
// }
import { Component, ViewEncapsulation } from '@angular/core';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  standalone: true,
  selector: 'app-skill',
  encapsulation: ViewEncapsulation.None,
  imports: [RevealDirective],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.scss',
})
export class SkillsComponent {

  readonly tecnologias = [
    {
      icon: '⚡',
      title: 'Frontend',
      skills: [
        { name: 'Angular',      level: 92 },
        { name: 'TypeScript',   level: 90 },
        { name: 'React',        level: 78 },
        { name: 'Tailwind CSS', level: 88 },
      ],
      tags: ['HTML5', 'SCSS', 'RxJS', 'Signals'],
    },
    {
      icon: '🔗',
      title: 'Backend & APIs',
      skills: [
        { name: 'Node.js',   level: 85 },
        { name: 'REST APIs', level: 92 },
        { name: 'GraphQL',   level: 70 },
        { name: 'PostgreSQL',level: 80 },
      ],
      tags: ['Express', 'NestJS', 'MongoDB', 'Firebase'],
    },
    {
      icon: '☁️',
      title: 'Cloud & Seguridad',
      skills: [
        { name: 'AWS (EC2/S3/Lambda)', level: 78 },
        { name: 'Ciberseguridad',      level: 75 },
        { name: 'Docker',              level: 70 },
        { name: 'CI/CD',               level: 72 },
      ],
      tags: ['IAM', 'VPC', 'CloudFront', 'Pentest básico'],
    },
  ];

  readonly metodologias = [
    { icon: '📋', label: 'Levantamiento de requerimientos', desc: 'Entrevistas, talleres y análisis de procesos AS-IS / TO-BE.' },
    { icon: '🗺️', label: 'Diseño de arquitectura',         desc: 'Diagramas C4, modelado de datos y selección de stack tecnológico.' },
    { icon: '📐', label: 'Análisis y propuesta de valor',   desc: 'ROI estimado, benchmarking tecnológico y roadmap ejecutivo.' },
    { icon: '🔄', label: 'Metodología ágil',               desc: 'Sprints iterativos, entrega continua y retroalimentación temprana.' },
    { icon: '📊', label: 'KPIs & métricas',                desc: 'Definición de indicadores y dashboards para medir el impacto.' },
    { icon: '🎓', label: 'Capacitación',                   desc: 'Transferencia de conocimiento al equipo interno del cliente.' },
  ];
}