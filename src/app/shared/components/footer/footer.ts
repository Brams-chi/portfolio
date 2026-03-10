import { Component } from '@angular/core';
import { LogoComponent } from '../logo-component/logo-component';

@Component({
  selector: 'app-footer',
  imports: [LogoComponent],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class FooterComponent {
}
