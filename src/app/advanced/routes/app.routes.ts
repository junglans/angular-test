import { HospitalComponent } from 'src/app/intermediate2/hospital/hospital.component';
import { Routes } from '@angular/router';
import { MedicosComponent } from 'src/app/components/medicos.component';
import { IncrementadorComponent } from 'src/app/intermediate2/incrementor/incrementador.component';


export const ROUTES: Routes = [
    { path: 'hospitals', component: HospitalComponent },
    { path: 'medico/:id', component: MedicosComponent },
    { path: '**', component: IncrementadorComponent   }
];