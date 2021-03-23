import { Component, Inject, OnInit } from '@angular/core';
import { ProductosService } from '../productos.service';
import { ComunicacionService } from '../comunicacion.service';

@Component({
  selector: 'app-productos-a',
  templateUrl: './productos-a.component.html',
  styleUrls: ['./productos-a.component.css'],
  // providers: [
  //   ProductosService
  // ]
})
export class ProductosAComponent implements OnInit {
  productos = [];
  constructor(@Inject('instanciaA') private productosServ: ProductosService, private comunicacionServ: ComunicacionService) { }

  ngOnInit(): void {
    this.productos = this.productosServ.getProductos();
  }

  addProducto(nombreProducto) {
    this.productosServ.addProducto(nombreProducto);
  }

  emitirProductoSinStock(nombreProducto) {
    this.comunicacionServ.enviarDato.emit('Ya no hay existencias del producto ' + nombreProducto);
    this.productosServ.enviarDato.emit('Ya no hay existencias del producto ' + nombreProducto);
  }
}
