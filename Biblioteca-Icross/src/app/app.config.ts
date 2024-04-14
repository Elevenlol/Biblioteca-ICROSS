import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    importProvidersFrom(
      provideFirebaseApp(() =>
        initializeApp({
          projectId: 'biblioteca-icross-54d91',
          appId: '1:1063904363864:web:3883278624bce6d253112d',
          storageBucket: 'biblioteca-icross-54d91.appspot.com',
          apiKey: 'AIzaSyCwFT7uR1Fu_8g0CbXlYEPuHUkaL68RuvA',
          authDomain: 'biblioteca-icross-54d91.firebaseapp.com',
          messagingSenderId: '1063904363864',
        })
      )
    ),
    importProvidersFrom(provideAuth(() => getAuth())),
  ],
};
