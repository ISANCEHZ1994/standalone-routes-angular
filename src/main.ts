import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';


import { AppComponent } from './app/app.component';
// import { AnalyticsService } from './app/shared/analytics.service';
import { environment } from './environments/environment';
import { AppRoutingModule } from './app/app-routing.module';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    // AnalyticsService,
    // to make Angular aware of these routes - we have to use below and add the routes thru this:
    importProvidersFrom(AppRoutingModule) // adding the pointer
  ],
});
