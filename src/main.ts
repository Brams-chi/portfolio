import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withViewTransitions } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app/app.routes';
import { AppComponent } from './app/app';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes, withViewTransitions()),
    provideHttpClient(),
  ],
}).catch(err => console.error(err));