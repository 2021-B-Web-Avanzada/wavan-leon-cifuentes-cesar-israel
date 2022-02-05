import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RutaContactoComponent} from "./ruta-contacto/ruta-contacto.component";
import {RutaBusquedaComponent} from "./ruta-busqueda/ruta-busqueda.component";
import {RutaDirectorioComponent} from "./ruta-directorio/ruta-directorio.component";

const routes: Routes = [
  {
    path: 'contacto',
    component: RutaContactoComponent
  }, {
    path: 'busqueda',
    component: RutaBusquedaComponent
  }, {
    path: 'directorio',
    component: RutaDirectorioComponent
  },
  {
    path: '',
    redirectTo: '/contacto',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
