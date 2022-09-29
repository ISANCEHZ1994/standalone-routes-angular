import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';

@Component({
  standalone: true,
  // now that we added RouterModule - no errors but nothing appears after serve(ing)
  // this is because it is not aware of its routes
  imports: [WelcomeComponent, RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}
