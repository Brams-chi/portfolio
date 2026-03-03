import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/home.component').then(m => m.HomeComponent),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./features/about/about.component').then(m => m.AboutComponent),
  },
  {
    path: 'skills',
    loadComponent: () =>
      import('./features/skill/skill.component').then(m => m.SkillsComponent),
  },
  {
    path: 'projects',
    loadComponent: () =>
      import('./features/projects/projects.component').then(m => m.ProjectsComponent),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./features/contact/contact.component').then(m => m.ContactComponent),
  },
  { path: '**', redirectTo: '' },
];