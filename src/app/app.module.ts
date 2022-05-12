import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ HttpClientModule }from'@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './app/componentes/header/header.component';
import { AcercaComponent } from './app/componentes/acerca/acerca.component';
import { ExperienciaComponent } from './app/componentes/experiencia/experiencia.component';
import { EducacionComponent } from './app/componentes/educacion/educacion.component';
import { HardskillComponent } from './app/componentes/hardskill/hardskill.component';
import { ProyectoComponent } from './app/componentes/proyecto/proyecto.component';
import { FormsModule } from '@angular/forms';





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
    FormsModule,
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
