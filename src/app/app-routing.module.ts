import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
// import { AboutComponent } from './about/about.component';
// import { DASHBOARD_ROUTES } from './dashboard/routes';

import { WelcomeComponent } from './welcome/welcome.component';

const routes: Route[] = [
  {
    path: '',
    component: WelcomeComponent,
  },
  {
    path: 'about',
    // component: AboutComponent,\
    // we are now applying Lazy Loading
    // loadComponent - ONLY works with STANDALONE Components
    loadComponent: () => import('./about/about.component').then(
       (mod) => mod.AboutComponent 
    )
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/routes').then(
        (mod) => 
        // mod.DashboardRoutingModule <== instead of using Dashboard
        // we use our exported variable in routes.ts file - less code in the long run
        mod.DASHBOARD_ROUTES  
      ), 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
