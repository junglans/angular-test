import { ROUTES } from "./app.routes";
import { MedicosComponent } from 'src/app/components/medicos.component';


describe('Pruebas de Rutas.', () => {

    it ('Comprobar que existe medicos/:id', () => {

        expect ( ROUTES ).toContain({ path: 'medico/:id', component: MedicosComponent });
    });
});