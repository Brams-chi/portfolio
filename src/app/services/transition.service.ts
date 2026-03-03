import { Injectable, signal } from '@angular/core';

export type TransitionPhase = 'idle' | 'closing' | 'holding' | 'opening';

@Injectable({ providedIn: 'root' })
export class TransitionService {

  readonly phase    = signal<TransitionPhase>('idle');
  readonly isActive = signal(false);
  readonly showLogo = signal(false);

  private readonly DURATION_CLOSE = 480;
  private readonly DURATION_HOLD  = 160;
  private readonly DURATION_OPEN  = 500;

  /** Ejecuta la transición cortina y llama callback() cuando los paneles están cerrados */
  async runTransition(callback: () => void): Promise<void> {
    if (this.isActive()) return;
    this.isActive.set(true);

    // Fase 1 — cortina entra desde la izquierda
    this.phase.set('closing');
    await this.sleep(this.DURATION_CLOSE);

    // Fase 2 — mostrar logo, cambiar ruta
    this.phase.set('holding');
    this.showLogo.set(true);
    await this.sleep(60);
    callback();                        // ← el router navega aquí
    await this.sleep(this.DURATION_HOLD);

    // Fase 3 — cortina sale hacia la derecha
    this.showLogo.set(false);
    this.phase.set('opening');
    await this.sleep(this.DURATION_OPEN);

    // Reset
    this.phase.set('idle');
    this.isActive.set(false);
  }

  private sleep(ms: number): Promise<void> {
    return new Promise(r => setTimeout(r, ms));
  }
}