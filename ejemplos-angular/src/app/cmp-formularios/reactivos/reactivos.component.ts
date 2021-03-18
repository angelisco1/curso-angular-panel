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
      usuario: new FormControl('angel', [Validators.required, this.esStark]),
      password: new FormControl('1234', [Validators.required, Validators.minLength(8)])
    });
  }

  login() {
    console.log(this.formulario)
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
}
