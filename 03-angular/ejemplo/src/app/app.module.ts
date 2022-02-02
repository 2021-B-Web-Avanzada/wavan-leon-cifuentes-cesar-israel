import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RutaLoginComponent } from './ruta-login/ruta-login.component';
import { RouterModule } from '@angular/router';
import { RutaForbiddenComponent } from './ruta-forbidden/ruta-forbidden.component';
import { RutaNotFoundComponent } from './ruta-not-found/ruta-not-found.component';
import { RutaPostComponent } from './app/ruta-post/ruta-post.component';
import { RutaInicioComponent } from './ruta-inicio/ruta-inicio.component';
import { RutaUsuarioComponent } from './ruta-usuario/ruta-usuario.component';
import { RutaAppComponent } from './ruta-app/ruta-app.component';
import {AuthService} from "./app/servicios/auth/auth.service";
import {EstaLogeadoGuard} from "./app/servicios/auth/esta-logeado.guard";
import {EsAdministradorGuard} from "./app/servicios/auth/es-administrador.guard";
import { RutaReporteComponent } from './modulos/rutas/ruta-reporte/ruta-reporte.component';
import { RutaBodegaComponent } from './modulos/rutas/ruta-bodega/ruta-bodega.component';
import {BannerImagenesModule} from "./componentes/banner-imagenes/banner-imagenes.module";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RutaUsuarioPerfilComponent } from './ruta-usuario-perfil/ruta-usuario-perfil.component';
import {InputSwitchModule} from "primeng/inputswitch";
import {KnobModule} from "primeng/knob";
import {SplitButtonModule} from "primeng/splitbutton";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule} from "@angular/material/button";
import { ModalEjemploComponent } from './componentes/modales/modal-ejemplo/modal-ejemplo.component';
import {MatDialogModule} from "@angular/material/dialog";
import {NgbButtonsModule, NgbModule} from "@ng-bootstrap/ng-bootstrap";
@NgModule({
  //Componentes
  declarations: [
    AppComponent,
    RutaLoginComponent,
    RutaForbiddenComponent,
    RutaNotFoundComponent,
    RutaPostComponent,
    RutaInicioComponent,
    RutaUsuarioComponent,
    RutaAppComponent,
    RutaReporteComponent,
    RutaBodegaComponent,
    RutaUsuarioPerfilComponent,
    ModalEjemploComponent
  ],
  //Modulos
  imports: [

    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BannerImagenesModule,
    HttpClientModule,
    FormsModule,// Template Driven Forms
    ReactiveFormsModule, // Template Reactivo
    InputSwitchModule,
    KnobModule,
    BrowserAnimationsModule,
    SplitButtonModule,
    MatButtonModule,
    MatDialogModule,
    NgbModule,
    NgbButtonsModule
  ],
  //Servicios
  providers: [
    AuthService,
    EstaLogeadoGuard,
    EsAdministradorGuard
  ],
  //Componente principal
  bootstrap: [AppComponent]
})
export class AppModule { }
