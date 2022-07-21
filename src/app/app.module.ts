import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponenteContentComponent } from './componentes/componente-content/componente-content.component';
import { ComponenteMenuComponent } from './componentes/componente-menu/componente-menu.component';
import { ComponenteToolbarComponent } from './componentes/componente-toolbar/componente-toolbar.component';
import { ComponenteListaComponent } from './componentes/componente-lista/componente-lista.component';
import { MiDirectivaDirective } from './directivas/mi-directiva.directive';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modulos/material/material.module';
import { ModalAlumnoComponent } from './componentes/modal-alumno/modal-alumno.component';
import * as $ from 'jquery';
import { PruebaServicioComponent } from './componentes/prueba-servicio/prueba-servicio.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponenteContentComponent,
    ComponenteMenuComponent,
    ComponenteToolbarComponent,
    ComponenteListaComponent,
    MiDirectivaDirective,
    FormularioComponent,
    ModalAlumnoComponent,
    PruebaServicioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
