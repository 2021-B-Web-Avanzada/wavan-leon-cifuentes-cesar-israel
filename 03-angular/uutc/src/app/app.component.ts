import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
   title = 'UTC';

    constructor(
      private readonly router:Router
    ) {
    }
  onEnter() {
    this.router.navigate(['/busqueda'])
  }
}
