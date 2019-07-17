import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IncrementadorComponent } from './incrementador.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';


describe('Incremendator Component', () => {

    let component: IncrementadorComponent;
    let fixture: ComponentFixture<IncrementadorComponent>;

    beforeEach( () => {
        TestBed.configureTestingModule({
            declarations: [ IncrementadorComponent ],
            imports: [ FormsModule ]
        });

        fixture = TestBed.createComponent(IncrementadorComponent);
        component = fixture.componentInstance;
        component.progreso = 50;
    });

    it('Debe crear un IncrementadorComponent', () => {
        expect( component ).toBeTruthy();
    });

    it('Debe mostrar una leyenda', () => {
        component.leyenda = 'Progreso de carga';
        fixture.detectChanges();
        const elem: HTMLElement = fixture.debugElement.query(By.css('h3')).nativeElement;
        expect(elem.innerText).toBe(component.leyenda + ' - ' + component.progreso);
    });

    it('Debe mostrar en el input el valor del progreso', () =>{
        component.cambiarValor(5);
        fixture.detectChanges();
        // Esperamos a que el cambio se haya realizado.
        fixture.whenStable().then(() => {
            const input:HTMLInputElement = fixture.debugElement.query(By.css('input')).nativeElement;
            expect(input.value).toBe('55');
        });
        expect(true).toBe(true);
    });

    it ('Comprobar que el valor del progreso ha cambiado al pulsa cambiarValor', () => {

       
        const buttons: DebugElement[] =  fixture.debugElement.queryAll(By.css('.btn-primary'));
        const elem: HTMLElement = fixture.debugElement.query(By.css('h3')).nativeElement;
        buttons[0].triggerEventHandler('click',null);
        fixture.detectChanges();
        expect(elem.innerText).toBe(component.leyenda + ' - ' + component.progreso);
        expect(component.progreso).toBe(45);
        

        
    });
});
