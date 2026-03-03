import { Component, inject } from '@angular/core';
import { TransitionService } from '../../../services/transition.service';

@Component({
  selector: 'app-page-transition',
  imports: [],
  templateUrl: './page-transition.html',
  styleUrl: './page-transition.scss',
})
export class PageTransitionComponent {
  readonly svc = inject(TransitionService);
}
