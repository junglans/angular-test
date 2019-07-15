import { Component, OnInit } from '@angular/core';
import { MedicosService } from '../services/medicos.service';


@Component({
  selector: 'app-medicos',
  template: `
    <p>
      medicos works!
    </p>
  `,
  styles: []
})
export class MedicosComponent implements OnInit {

  public medicos: any[] = [];
  public mensajeError: string;

  constructor( public _medicoService: MedicosService ) { }

  ngOnInit() {
     console.log('ngOnInit');
     this._medicoService.getMedicos()
          .subscribe( medicos => {
            this.medicos = medicos
          }  ); 
  }

  agregarMedico() {
    const medico = { nombre: 'Médico Juan Carlos' };

    this._medicoService.agregarMedico(medico)
          .subscribe(
            medicoDB => {
              console.log(medicoDB.nombre);
              this.medicos.push(medicoDB)
            },
            err => this.mensajeError = err,
            () => {
              console.log(JSON.stringify(this.medicos));
            }
          );
  }

  borrarMedico(id: string) {
    const confirmar = confirm('Estas seguro que desea borrar este médico');

    if ( confirmar ) {
      this._medicoService.borrarMedico( id );
    }

  }

}
