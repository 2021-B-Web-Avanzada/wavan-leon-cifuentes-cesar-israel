import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ruta-not-found',
  templateUrl: './ruta-not-found.component.html',
  styleUrls: ['./ruta-not-found.component.scss']
})
export class RutaNotFoundComponent implements OnInit {

  colorBar = "#FFFF55"
  scaleImg = 180

  constructor() { }

  ngOnInit(): void {
  }

}
