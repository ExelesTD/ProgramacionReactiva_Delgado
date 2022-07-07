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

@NgModule({
  declarations: [
    AppComponent,
    ComponenteContentComponent,
    ComponenteMenuComponent,
    ComponenteToolbarComponent,
    ComponenteListaComponent,
    MiDirectivaDirective,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
