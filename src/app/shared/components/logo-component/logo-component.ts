import { Component, Input } from '@angular/core';

export type LogoSize = 'xs' | 'sm' | 'md' | 'lg';
export type LogoVariant = 'full' | 'icon';

/**
 * Componente Logo reutilizable BRAMS
 *
 * Uso:
 *   <app-logo />                        → full, tamaño sm (navbar)
 *   <app-logo size="md" />              → full, mediano (footer)
 *   <app-logo size="lg" />              → full, grande (about/hero)
 *   <app-logo variant="icon" size="sm" /> → solo isotipo cuadrado
 */
@Component({
  selector: 'app-logo',
  imports: [],
  templateUrl: './logo-component.html',
  styleUrl: './logo-component.scss',
})
export class LogoComponent {
  @Input() size: LogoSize = 'sm';
  @Input() variant: LogoVariant = 'full';
  @Input() alt = 'BRAMS Tech Solutions';

  get imgSrc (): string {
    return '/images/logoBramsFinal.png';
  }
}
