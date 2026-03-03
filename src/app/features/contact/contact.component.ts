// import { Component, inject, signal } from '@angular/core';
// import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
// import { RevealDirective } from '../../shared/directives/reveal.directive';

// @Component({
//   standalone: true,
//   selector: 'app-contact',
//   imports: [ RevealDirective, ReactiveFormsModule],
//   templateUrl: './contact.component.html',
//   styleUrl: './contact.component.scss',
// })
// export class ContactComponent {
//   readonly fb = inject(FormBuilder);

//   readonly sent = signal(false);

//   readonly form = this.fb.group({
//     name:    ['', [Validators.required, Validators.minLength(2)]],
//     email:   ['', [Validators.required, Validators.email]],
//     subject: [''],
//     message: ['', [Validators.required, Validators.minLength(10)]],
//   });

//   readonly socialLinks = [
//     { label: 'GitHub',    url: 'https://github.com' },
//     { label: 'LinkedIn',  url: 'https://linkedin.com' },
//     { label: 'Twitter/X', url: 'https://twitter.com' },
//   ];

//   isInvalid(field: string): boolean {
//     const control = this.form.get(field);
//     return !!(control?.invalid && control?.touched);
//   }

//   onSubmit(): void {
//     if (this.form.invalid) {
//       this.form.markAllAsTouched();
//       return;
//     }
//     // Aquí integrarías EmailJS, Formspree, o tu API
//     console.log(this.form.value);
//     this.sent.set(true);
//     this.form.reset();
//   }
// }

import { Component, inject, signal, ViewEncapsulation } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  standalone: true,
  selector: 'app-contact',
  encapsulation: ViewEncapsulation.None,
  imports: [ReactiveFormsModule, RevealDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  private fb    = inject(FormBuilder);
  readonly sent = signal(false);

  readonly form = this.fb.group({
    name:    ['', [Validators.required, Validators.minLength(2)]],
    email:   ['', [Validators.required, Validators.email]],
    company: [''],
    service: [''],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  readonly serviceOptions = [
    { value: 'consultoria', label: '🎯 Asesoría Técnica' },
    { value: 'software',    label: '💻 Desarrollo de Software' },
    { value: 'completo',    label: '🚀 Todo Incluido' },
    { value: 'otro',        label: '💬 Otro / No sé aún' },
  ];

  readonly social = [
    { label: 'LinkedIn', url: 'https://linkedin.com' },
    { label: 'GitHub',   url: 'https://github.com' },
    { label: 'Email',    url: 'mailto:hola@brams.cl' },
  ];

  readonly canales = [
    { icon: '📧', label: 'Email', value: 'hola@brams.cl' },
    { icon: '📱', label: 'WhatsApp', value: '+56 9 XXXX XXXX' },
    { icon: '📍', label: 'Ubicación', value: 'Chile — Remoto disponible' },
  ];

  isInvalid(f: string): boolean {
    const c = this.form.get(f);
    return !!(c?.invalid && c?.touched);
  }

  onSubmit(): void {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    console.log(this.form.value);
    this.sent.set(true);
    this.form.reset();
  }
}