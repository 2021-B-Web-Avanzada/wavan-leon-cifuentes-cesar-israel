import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ruta-busqueda',
  templateUrl: './ruta-busqueda.component.html',
  styleUrls: ['./ruta-busqueda.component.scss']
})
export class RutaBusquedaComponent implements OnInit {
  elemts= [
    {
      titulo: 'Aplicaciones en la industria',
      fecha: '16-01-2022',
      texto: 'Una aplicación móvil es una aplicación informática diseñada para ser ejecutada en teléfonos inteligentes, tabletas y otros dispositivos móviles. Este tipo de aplicaciones permiten ' +
        'al usuario efectuar un variado conjunto de tareas —profesional, de ocio, educativas, de acceso a servicios, etc.—, facilitando las gestiones o actividades a desarrollar',
    },
    {
      titulo:'Aplicaciones en la industria',
      fecha: '16-01-2022',
      texto: 'Una aplicación móvil es una aplicación informática diseñada para ser ejecutada en teléfonos inteligentes, tabletas y otros dispositivos móviles. Este tipo de aplicaciones permiten ' +
        'al usuario efectuar un variado conjunto de tareas —profesional, de ocio, educativas, de acceso a servicios, etc.—, facilitando las gestiones o actividades a desarrollar',
    },
    {
      titulo: 'Aplicaciones en la industria',
      fecha: '16-01-2022',
      texto: 'Una aplicación móvil es una aplicación informática diseñada para ser ejecutada en teléfonos inteligentes, tabletas y otros dispositivos móviles. Este tipo de aplicaciones permiten ' +
        'al usuario efectuar un variado conjunto de tareas —profesional, de ocio, educativas, de acceso a servicios, etc.—, facilitando las gestiones o actividades a desarrollar',
    },
    {
      titulo: 'Aplicaciones en la industria',
      fecha: '16-01-2022',
      texto: 'Una aplicación móvil es una aplicación informática diseñada para ser ejecutada en teléfonos inteligentes, tabletas y otros dispositivos móviles. Este tipo de aplicaciones permiten ' +
        'al usuario efectuar un variado conjunto de tareas —profesional, de ocio, educativas, de acceso a servicios, etc.—, facilitando las gestiones o actividades a desarrollar',
    },
    {
      titulo:'Aplicaciones en la industria',
      fecha: '16-01-2022',
      texto: 'Una aplicación móvil es una aplicación informática diseñada para ser ejecutada en teléfonos inteligentes, tabletas y otros dispositivos móviles. Este tipo de aplicaciones permiten ' +
        'al usuario efectuar un variado conjunto de tareas —profesional, de ocio, educativas, de acceso a servicios, etc.—, facilitando las gestiones o actividades a desarrollar',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
