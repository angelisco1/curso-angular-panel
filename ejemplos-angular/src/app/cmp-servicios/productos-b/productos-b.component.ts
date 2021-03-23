import { Component, OnInit, Inject } from '@angular/core';
import { ComunicacionService } from '../comunicacion.service';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-productos-b',
  templateUrl: './productos-b.component.html',
  styleUrls: ['./productos-b.component.css'],
  providers: [
    ProductosService
  ]
})
export class ProductosBComponent implements OnInit {
  productos = [];
  productoSinStock: string = '';
  constructor(private productosServ: ProductosService, public comunicacionServ: ComunicacionService) { }

  ngOnInit(): void {
    this.productos = this.productosServ.getProductos();
    this.productosServ.enviarDato.subscribe((producto) => {
      this.productoSinStock = producto;
    });
    // this.comunicacionServ.enviarDato.subscribe((producto) => {
    //   this.productoSinStock = producto;
    // });
  }

  addProducto(nombreProducto) {
    this.productosServ.addProducto(nombreProducto);
  }

  emitirProductoSinStock(nombreProducto) {
    this.productosServ.enviarDato.emit('Ya no hay existencias del producto ' + nombreProducto);
  }
}