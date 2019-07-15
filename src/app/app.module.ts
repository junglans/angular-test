import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { MedicosComponent } from './components/medicos.component';
import { MedicosService } from './services/medicos.service';
@NgModule({
  declarations: [
    AppComponent,
    MedicosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [ MedicosService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
