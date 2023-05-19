import { Component } from '@angular/core';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Interfaz-Login';

  constructor(private router: Router) { }



  shouldShowNavBar() {
    const currentUrl = this.router.url;
    return currentUrl !== '/';
  }
}
