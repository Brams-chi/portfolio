import { Directive, ElementRef, OnInit, OnDestroy, Input } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[appReveal]',
})
export class RevealDirective implements OnInit, OnDestroy {
  @Input() revealDelay = 0; // ms de delay adicional

  private observer!: IntersectionObserver;

  constructor(readonly el: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const element = this.el.nativeElement;
    element.classList.add('reveal');

    if (this.revealDelay) {
      element.style.transitionDelay = `${this.revealDelay}ms`;
    }

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('visible');
          this.observer.unobserve(element);
        }
      },
      { threshold: 0.1 }
    );

    // Pequeño delay para que el primer render no corte la animación
    setTimeout(() => this.observer.observe(element), 50);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}