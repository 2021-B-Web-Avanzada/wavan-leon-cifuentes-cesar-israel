import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RutaContactoComponent } from './ruta-contacto/ruta-contacto.component';
import { RutaDirectorioComponent } from './ruta-directorio/ruta-directorio.component';
import { RutaBusquedaComponent } from './ruta-busqueda/ruta-busqueda.component';

@NgModule({
  declarations: [
    AppComponent,
    RutaContactoComponent,
    RutaDirectorioComponent,
    RutaBusquedaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
