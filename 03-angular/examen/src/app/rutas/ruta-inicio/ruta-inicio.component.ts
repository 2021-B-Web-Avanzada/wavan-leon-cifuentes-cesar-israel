import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ruta-inicio',
  templateUrl: './ruta-inicio.component.html',
  styleUrls: ['./ruta-inicio.component.scss']
})
export class RutaInicioComponent implements OnInit {
  usuario ={
    nombre: "César",
    apellido: "León",
    cooreo: "israelleon981@gmail.com"
  }
  colorbg = "#FFFF55"
  scaleImg = 180
  opciones =[
    'Historial',
    'Vender',
    'Ayuda'
  ]
  opcionesUsuario =[
    {
      nombre : "Compras",
      link : RutaInicioComponent
    },
    {
      nombre : "Preguntas",
      link : RutaInicioComponent
    }
  ]
  opcionesConfiguracion =[
    {
      nombre : "Mis datos",
      link : RutaInicioComponent
    },
    {
      nombre : "Seguridad",
      link : RutaInicioComponent
    }
    ,
    {
      nombre : "Privaciadad",
      link : RutaInicioComponent
    }
  ]

  favoritos = []
  notificaciones = []
  constructor() { }


  ngOnInit(): void {
  }

}
