import { Component, Inject, OnInit } from '@angular/core';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-productos-b1',
  templateUrl: './productos-b1.component.html',
  styleUrls: ['./productos-b1.component.css']
})
export class ProductosB1Component implements OnInit {
  productoSinStock: string = '';
  productos = []

  constructor(@Inject('instanciaA') private productosServ: ProductosService) { }

  ngOnInit(): void {
    this.productosServ.enviarDato.subscribe((dato) => {
      this.productoSinStock = dato;
    })
    this.productos = this.productosServ.getProductos()
  }

}
