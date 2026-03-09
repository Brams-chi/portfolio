import { Component, inject, signal, ViewEncapsulation } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { EmailService } from '../../services/email.service';

@Component({
  standalone: true,
  selector: 'app-contact',
  encapsulation: ViewEncapsulation.None,
  imports: [ReactiveFormsModule, RevealDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  private fb = inject(FormBuilder);
  private emailService = inject(EmailService);

  readonly status = signal<'idle' | 'sending' | 'sent' | 'error'>('idle');

  readonly form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    company: [''],
    service: [''],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  readonly serviceOptions = [
    { value: 'consultoria', label: '🎯 Asesoría Técnica' },
    { value: 'software', label: '💻 Desarrollo de Software' },
    { value: 'completo', label: '🚀 Todo Incluido' },
    { value: 'otro', label: '💬 Otro / No sé aún' },
  ];

  readonly canales = [
    { icon: '📧', label: 'Email', value: 'brams.contacto@gmail.com' },
    { icon: '📍', label: 'Ubicación', value: 'Chile — Remoto disponible' },
  ];


  get isSending () { return this.status() === 'sending'; }
  get isSent () { return this.status() === 'sent'; }
  get isError () { return this.status() === 'error'; }

  isInvalid (f: string): boolean {
    const c = this.form.get(f);
    return !!(c?.invalid && c?.touched);
  }

  async onSubmit (): Promise<void> {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.status.set('sending');

    const { name, email, company, service, message } = this.form.value;

    // Mapear el valor del select a etiqueta legible
    const serviceLabel = this.serviceOptions.find(o => o.value === service)?.label
      ?? service
      ?? 'No especificado';

    try {
      await this.emailService.send({
        from_name: name ?? '',
        from_email: email ?? '',
        company: company || 'No especificada',
        service: serviceLabel,
        message: message ?? '',
        reply_to: email ?? '',
      });

      this.status.set('sent');
      this.form.reset();

    } catch (err) {
      console.error('EmailJS error:', err);
      this.status.set('error');
    }
  }
}