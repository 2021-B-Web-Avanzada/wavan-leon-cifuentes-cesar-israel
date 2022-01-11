import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RutaInicioComponent} from "./rutas/ruta-inicio/ruta-inicio.component";
import {RutaNotFoundComponent} from "./rutas/ruta-not-found/ruta-not-found.component";
import {AppComponent} from "./app/app.component";
import {RutaCategoriasComponent} from "./ruta-categorias/ruta-categorias.component";



const routes: Routes = [
  {
    path : 'inicio',
    component: RutaInicioComponent,
    children:[
      {
        path: '',
        component: AppComponent
      },
      {
        path: 'categorias',
        component: RutaCategoriasComponent
      }
    ]
  },
  {
    path: '',
    redirectTo : 'inicio',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: RutaNotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
