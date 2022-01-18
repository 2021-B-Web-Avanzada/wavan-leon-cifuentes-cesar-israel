import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  colorbg = "#eeeeee"
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  btnClick = () =>{
      this.router.navigateByUrl("/inicio/categorias")
  }
}
