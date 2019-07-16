import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IncrementadorComponent } from './incrementador.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';


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

        fixture.whenStable().then(() => {
            const input:HTMLInputElement = fixture.debugElement.query(By.css('input')).nativeElement;
            console.log(input);
            expect(input.value).toBe('55');
        });
        
    });
});
