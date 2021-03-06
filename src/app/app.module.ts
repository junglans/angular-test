import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { MedicosComponent } from './components/medicos.component';
import { MedicosService } from './services/medicos.service';
import { HospitalComponent } from './intermediate2/hospital/hospital.component';
import { IncrementadorComponent } from './intermediate2/incrementor/incrementador.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './advanced/routes/app.routes';
@NgModule({
  declarations: [
    AppComponent,
    MedicosComponent,
    HospitalComponent,
    IncrementadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [ MedicosService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
