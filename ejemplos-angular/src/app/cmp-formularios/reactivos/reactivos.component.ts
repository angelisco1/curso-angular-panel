import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactivos',
  templateUrl: './reactivos.component.html',
  styleUrls: ['./reactivos.component.css']
})
export class ReactivosComponent implements OnInit {
  formulario: FormGroup;

  constructor() { }

  ngOnInit(): void {

    this.formulario = new FormGroup({
      // usuario: new FormControl('angel', [Validators.required, this.esStark]),
      usuario: new FormControl('angel', [Validators.required, this.nombreDisponible(['angel', 'sara', 'rickon'])]),
      password: new FormControl('1234', [Validators.required, Validators.minLength(8)]),
      pais: new FormControl('', Validators.required),
      telefono: new FormControl('', Validators.required),
    }, {
      updateOn: 'submit',
      validators: this.numTelefonoPorPais
    });
  }

  login() {
    console.log(this.formulario)
  }

  numTelefonoPorPais(formGroup) {
    console.log(formGroup)
    const paisSeleccionado = formGroup.value.pais;
    const telefonoSeleccionado = formGroup.value.telefono;

    switch(paisSeleccionado) {
      case 'es':
        return telefonoSeleccionado.includes('+34') ? null : { numTelefono: 'El número tiene que empezar por +34' }
      case 'it':
        return telefonoSeleccionado.includes('+37') ? null : { numTelefono: 'El número tiene que empezar por +37' }
      case 'po':
        return telefonoSeleccionado.includes('+33') ? null : { numTelefono: 'El número tiene que empezar por +33' }
    }

    return null;
  }

  esStark(formControl) {
    const starks = ['arya', 'robb', 'sansa', 'rickon', 'tony', 'bran'];
    if (starks.includes(formControl.value.toLowerCase())) {
      return null;
    }
    return {
      esStark: {
        actualName: formControl.value,
        validNames: starks
      }
    }
  }

  nombreDisponible(nombresUsados: Array<string>) {
    return (formControl) => {
      if (nombresUsados.includes(formControl.value.toLowerCase())) {
        return {
          nombreDisponible: {
            actualName: formControl.value,
            // nombresUsados: nombreUsados
            nombresUsados
          }
        }
      }
      return null;
    }
  }
}
