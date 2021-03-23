import { Component, OnInit } from '@angular/core';
import { DatosService } from './datos.service';

@Component({
  selector: 'app-cmp-http',
  templateUrl: './cmp-http.component.html',
  styleUrls: ['./cmp-http.component.css']
})
export class CmpHttpComponent implements OnInit {
  tareas = [];
  constructor(public datosServ: DatosService) { }

  ngOnInit(): void {
    this.getTareas()
  }

  getTareas() {
    this.datosServ.getTareas().subscribe((datos) => {
      console.log(datos);
      this.tareas = datos;
    })
  }

  addTarea(nuevoTitulo: string) {
    const nuevaTarea = {
      titulo: nuevoTitulo,
      completada: false
    };
    this.datosServ.crearTarea(nuevaTarea).subscribe(() => {
      alert('Tarea creada!')
      this.getTareas();
    });
  }

  eliminar(id) {
    this.datosServ.eliminarTarea(id).subscribe(() => {
      alert('Tarea eliminada!')
      this.getTareas();
    });
  }
}
