import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './app/componentes/header/header.component';
import { AcercaComponent } from './app/componentes/acerca/acerca.component';
import { ExperienciaComponent } from './app/componentes/experiencia/experiencia.component';
import { EducacionComponent } from './app/componentes/educacion/educacion.component';
import { HardskillComponent } from './app/componentes/hardskill/hardskill.component';
import { ProyectoComponent } from './app/componentes/proyecto/proyecto.component';
import{HttpClientModule } from '@angular/common/http';
import { PorfolioService } from './servicios/porfolio.service';
import { NgCircleProgressModule } from 'ng-circle-progress';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AcercaComponent,
    ExperienciaComponent,
    EducacionComponent,
    HardskillComponent,
    ProyectoComponent,
   
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot({}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
