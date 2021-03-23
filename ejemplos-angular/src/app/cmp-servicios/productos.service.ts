import { EventEmitter, Injectable } from '@angular/core';
import { ComunicacionService } from './comunicacion.service';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class ProductosService {
  productos = [];
  enviarDato = new EventEmitter<string>();

  constructor(private comunicacionServ: ComunicacionService) { }

  getProductos() {
    return this.productos;
  }

  addProducto(nuevoProducto: string) {
    this.comunicacionServ.escribirMensaje('Se ha añadido el producto ' + nuevoProducto);
    this.productos.push(nuevoProducto);
  }
}
