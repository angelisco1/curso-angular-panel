import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-directivas',
  templateUrl: './cmp-directivas.component.html',
  styleUrls: ['./cmp-directivas.component.css']
})
export class CmpDirectivasComponent implements OnInit {

  tarea = {
    titulo: 'Tarea 1',
    completada: false
  }

  // tarea = [
  //   {key: 'completada', value: false},
  //   {key: 'titulo', value: 'Tarea 1'},
  // ]

  opciones1Blink = {color: 'gold', colorInicial: 'blue'};

  mascotas = [
    'perro',
    'gato',
    'loro'
  ]

  // perro = 'canario'

  mascotaSeleccionada = 'loro';

  mostrarParrafo = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMostrarParrafo() {
    this.mostrarParrafo = !this.mostrarParrafo;
  }

  getOpciones2Blink() {
    return {
      color: 'gray',
      colorInicial: 'red'
    };
  }

}
