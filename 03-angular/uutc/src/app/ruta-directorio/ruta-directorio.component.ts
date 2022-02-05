import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ruta-directorio',
  templateUrl: './ruta-directorio.component.html',
  styleUrls: ['./ruta-directorio.component.scss']
})
export class RutaDirectorioComponent implements OnInit {
  ruta = [{
    ruta:'UTC>',
    directo:''
  },
    {
      ruta:'Directorio',
      directo:'/directorio'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
