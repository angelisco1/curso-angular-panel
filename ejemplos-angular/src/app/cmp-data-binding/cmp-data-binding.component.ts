import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-data-binding',
  templateUrl: './cmp-data-binding.component.html',
  styleUrls: ['./cmp-data-binding.component.css']
})
export class CmpDataBindingComponent implements OnInit {
  nombre: string = 'Ángel';
  modoEdicion: boolean = false;

  constructor() { }

  ngOnInit(): void {

  }

  toggleModoEdicion(event) {
    // console.log(event.target.type);
    this.modoEdicion = !this.modoEdicion;
    this.nombre = 'Ángel';
  }

  setNombre(event) {
    console.log({event})
    this.nombre = event.target.value;
  }
}
