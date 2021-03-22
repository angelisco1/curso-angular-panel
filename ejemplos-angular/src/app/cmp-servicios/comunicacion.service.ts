import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComunicacionService {
  enviarDato = new EventEmitter<string>();
  constructor() { }

  escribirMensaje(msg: string) {
    console.log('MSG: ' + msg);
  }
}
