import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { TransitionService } from '../../../services/transition.service';
@Component({
  standalone: true,
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss'],
})
export class NavbarComponent {
  readonly router = inject(Router);
  readonly transitions = inject(TransitionService);

  goto (path: string): void {
    if (this.router.url === path) return;
    this.transitions.runTransition(() => this.router.navigate([path]));
  }

  isActive (path: string): boolean {
    if (path === '/') return this.router.url === '/';
    return this.router.url.startsWith(path);
  }
}
