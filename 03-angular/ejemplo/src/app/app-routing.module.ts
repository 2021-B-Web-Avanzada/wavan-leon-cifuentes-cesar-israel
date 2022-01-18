import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RutaLoginComponent} from "./ruta-login/ruta-login.component";
import {RutaForbiddenComponent} from "./ruta-forbidden/ruta-forbidden.component";
import {RutaNotFoundComponent} from "./ruta-not-found/ruta-not-found.component";

import {RutaInicioComponent} from "./ruta-inicio/ruta-inicio.component";
import {RutaAppComponent} from "./ruta-app/ruta-app.component";
import {RutaUsuarioComponent} from "./ruta-usuario/ruta-usuario.component";
import {RutaPostComponent} from "./ruta-post/ruta-post.component";
import {EstaLogeadoGuard} from "./app/servicios/auth/esta-logeado.guard";
import {EsAdministradorGuard} from "./app/servicios/auth/es-administrador.guard";
import {RutaUsuarioPerfilComponent} from "./ruta-usuario-perfil/ruta-usuario-perfil.component";

const routes: Routes = [
  {
    path: 'login',
    component: RutaLoginComponent
  },
  {
    path: 'lazy-inventario',
    loadChildren: () => import('./modulos/modulo-inventario/modulo-inventario-routing.module')
      .then(n => n.ModuloInventarioRoutingModule)
  },
  {
    path: 'forbidden',
    component: RutaForbiddenComponent
  },
  {
    path: 'not-found',
    component: RutaNotFoundComponent
  },
  {
    path: 'inicio',
    canActivate: [ EstaLogeadoGuard],
    component: RutaInicioComponent
  },
  {
    path: 'app',
    component: RutaAppComponent,
    children:[
      {
        path: 'usuario',
        component: RutaUsuarioComponent
      },
      {
        path: 'usuario/:idUsuario',
        component: RutaUsuarioPerfilComponent
      },
      {
        path: 'post',
        component: RutaPostComponent,
        canActivate: [EsAdministradorGuard]
      }
      ]
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: RutaNotFoundComponent
  }

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
