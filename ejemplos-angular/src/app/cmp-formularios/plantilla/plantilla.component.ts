import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plantilla',
  templateUrl: './plantilla.component.html',
  styleUrls: ['./plantilla.component.css']
})
export class PlantillaComponent implements OnInit {

  valoresIniciales = {
    usuario: 'angel',
    password: '1234'
  }

  constructor() { }

  ngOnInit(): void {
    // this.valoresIniciales.usuario = 'aaaa';
  }

  login(form) {
    console.log(form);
    // console.log(form.value);
    // console.log(this.valoresIniciales);

  }

}
