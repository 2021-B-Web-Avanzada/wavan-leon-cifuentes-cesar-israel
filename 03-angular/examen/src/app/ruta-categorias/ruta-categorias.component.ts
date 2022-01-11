import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ruta-categorias',
  templateUrl: './ruta-categorias.component.html',
  styleUrls: ['./ruta-categorias.component.scss']
})
export class RutaCategoriasComponent implements OnInit {
  colorbg = "#eeeeee"
  categoriaNombre = "Accesorios para Vehículos"
  subCategoriasc1 = [
    {
      nombre: "Acc. para Motos y Cuatrimotos",
      objetos: [
        'Alarma para motos',
        'Alforjas',
        'Baúles y Anclajes',
        'Caballetes',
        'Cascos',
        'Cubre puños',
        'Cubre Rayos',
        'Defensas',
        'Emblemas',
        'Fundas',
        'Indumentaria y Calzado'

      ]
    },
    {
      nombre: "Acc. y Repuestos Naúticos",
      objetos: [
        'Audio y electrónica',
        'Bombas de Achique',
        'Boyas',
        'Carrocería y Cabina',
        'Controles y Conducción',
        'Decoración',
        'Fondeo y Amarre',
        'Interior de Cabina',
        'Luces',
        'Magueras'
      ]
    },
    {
      nombre: "Accesorios de auto y Camioneta",
      objetos: [
        'Accesorios de Exterior',
        'Accesorios de interior',
        'Otros'
      ]
    }
  ]
  subCategoriasc2 = [
    {
      nombre: "Herramientas",
      objetos: [
        'Bateas de Ultrasonido',
        'Bocallaves y Accesorios',
        'Cabinas de Pintura',
        'Camillas para Mecánicos',
        'Desarmadores de Neumáticos',
        'Elevación',
        'Escanep',
        'Espátulas para Polarizados',
        'Extractores de Poela',
        'Herramientas de Inspeccióon',
        'Herramientas para Baterías',
        'Infladores',
        'Llaves',
        'Malacates',
        'Medición',
        'Otras'
      ]
    },
    {
      nombre: "Limpieza de Vehículos",
      objetos: [
        'Abrillantadores',
        'Anticorrosivos'
      ]
    },
    {
      nombre: "Llantas",
      objetos: [
        'Alineación y Balanceo',
        'Cámaras para Llantas',
        'Cubieras para Bicicletas',
        'Cubiertas para Monopatines'
      ]
    }
  ]
  subCategoriasc3 = [
    {
      nombre: "Acc. para Motos y Cuatrimotos",
      objetos: [
        'Alarma para motos',
        'Alforjas',
        'Baúles'
      ]
    },
    {
      nombre: "Acc. y Repuestos Naúticos",
      objetos: [
        'Audio y electrónica',
        'Bombas de Achique',
        'Boyas'
      ]
    },
    {
      nombre: "Accesorios de auto y Camioneta",
      objetos: [
        'Accesorios de Exterior',
        'Accesorios de interior',
        'Otros'
      ]
    }
  ]

  elementosVenta = [
    {
      precio: 'U$S 6.48',
      descripcion: 'Camara Full Hd Con Vision Nocturna Impermeable Para',
      img: 'https://http2.mlstatic.com/D_Q_NP_884532-MEC44612758263_012021-AB.webp'
    },
    {
      precio: 'U$S 449',
      descripcion: 'Scooter Moto Eléctrica Doble Asiento C Garantia - Mr Price',
      img: 'https://http2.mlstatic.com/D_Q_NP_779099-MEC43419398500_092020-AB.webp'
    },
    {
      precio: 'U$S 6.48',
      descripcion: 'Camara Full Hd Con Vision Nocturna Impermeable Para',
      img: 'https://http2.mlstatic.com/D_Q_NP_884532-MEC44612758263_012021-AB.webp'
    },
    {
      precio: 'U$S 449',
      descripcion: 'Scooter Moto Eléctrica Doble Asiento C Garantia - Mr Price',
      img: 'https://http2.mlstatic.com/D_Q_NP_779099-MEC43419398500_092020-AB.webp'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
