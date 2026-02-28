// projects.service.ts
import { Injectable, signal, computed } from '@angular/core';
import { Project } from '../models/project.model';

@Injectable({ providedIn: 'root' })
export class ProjectsService {
  private _projects = signal<Project[]>([
    { id: 1, title: 'E-Commerce App', tech: ['Angular', 'Node.js'], demoUrl: '...', description: '' },
    // ...
  ]);

  readonly projects = this._projects.asReadonly();
  readonly count = computed(() => this._projects().length);
}