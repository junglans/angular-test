import { TestBed, async } from "@angular/core/testing";
import { MedicosComponent } from './medicos.component';
import { MedicosService } from '../services/medicos.service';
import { HttpModule } from '@angular/http';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { from, empty, throwError } from 'rxjs';

describe('MedicosComponent', () => {

    beforeEach( async(() => {
        TestBed.configureTestingModule({
            declarations: [MedicosComponent],
            imports: [ HttpModule ],
            providers: [HttpClient, HttpHandler, MedicosService ]
        }).compileComponents();
    }));

    it ('Los componentes se ha creado correctamente', () => {
        const fixture = TestBed.createComponent(MedicosComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    });

    it ('El componente debe inicializarse con una lista de médicos', () => {

        const medicosService = TestBed.get(MedicosService);

        spyOn(medicosService, 'getMedicos').and.callFake(() => {
          return from(['Medico1', 'Medico2']);
        });

        const fixture = TestBed.createComponent(MedicosComponent);
        const app = fixture.debugElement.componentInstance;
        fixture.detectChanges();

        expect(app.medicos.length).toBeGreaterThan(0);
    });

    it ('Debe llamar al método agregarMedico del componente', () => {
        const medicosService = TestBed.get(MedicosService);

        const spy = spyOn(medicosService, 'agregarMedico').and.callFake((medico) => {
            return empty(medico);
        })

        const fixture = TestBed.createComponent(MedicosComponent);
        const app = fixture.debugElement.componentInstance;
        app.agregarMedico();

        expect(spy).toHaveBeenCalled();
    });

    it ('Debe agregar un nueve médico a la lista', () => {

        const fixture = TestBed.createComponent(MedicosComponent);
        const component = fixture.debugElement.componentInstance;

        const medicosService = TestBed.get(MedicosService);

        const medico = {id:1 , nombre: 'Juan'};
       
        spyOn(medicosService, 'agregarMedico').and.returnValue(
                from([medico])
        );

        component.agregarMedico();
        expect(component.medicos.length !=0 ).toBeTruthy();
        expect(component.medicos.indexOf(medico) == 0 ).toBeTruthy();
    });

    it ('Si se produce un error, el error del componente debe ser igual al error del servicio.', () => {

            const fixture = TestBed.createComponent(MedicosComponent);
            const component = fixture.debugElement.componentInstance;

            const medicosService = TestBed.get(MedicosService);

            const errMsg = 'Error agregando médico';
            spyOn(medicosService, 'agregarMedico').and.returnValue(
                throwError(errMsg)
            );

            component.agregarMedico();
            expect(component.mensajeError).toBe(errMsg);

    });

    it ('Comprobar que el usuario aceptó borrar el médico', () => {

        spyOn(window, 'confirm').and.returnValue(true);
        
        const fixture = TestBed.createComponent(MedicosComponent);
        const component = fixture.debugElement.componentInstance;

        const medicosService = TestBed.get(MedicosService);
        const id = '1';
        const spy = spyOn(medicosService, 'borrarMedico').and.returnValue( id => {
            return empty();
        });

        component.borrarMedico(id);

        expect(spy).toHaveBeenCalledWith(id);
    });
});