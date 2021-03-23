import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  URL = 'https://ejemplos-dc1c1.firebaseio.com/tareas-angular/angel';

  constructor(private http: HttpClient) { }

  getTareas() {
    return this.http.get(this.URL + '.json')
      .pipe(
        map(datos => {
          const tareas = [];
          for (let id in datos) {
            const tarea = { id, ...datos[id] };
            tareas.push(tarea);
          }
          return tareas;
        })
      )
  }

  crearTarea(nuevaTarea) {
    return this.http.post(this.URL + '.json', JSON.stringify(nuevaTarea))
  }

  eliminarTarea(tareaId) {
    return this.http.delete(`${this.URL}/${tareaId}.json`);
  }
}
