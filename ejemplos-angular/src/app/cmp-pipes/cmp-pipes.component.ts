import { Component, LOCALE_ID, OnInit } from '@angular/core';
import localeEs from '@angular/common/locales/es';
// import localeEn from '@angular/common/locales/en';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeEs, 'es');
// registerLocaleData(localeEn, 'en');

@Component({
  selector: 'app-cmp-pipes',
  templateUrl: './cmp-pipes.component.html',
  styleUrls: ['./cmp-pipes.component.css'],
  providers: [
    { provide: LOCALE_ID, useValue: window.navigator.language }
  ]
})
export class CmpPipesComponent implements OnInit {

  producto = {
    nombre: 'one plus 8t',
    precio: 547,
    descripcion: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid temporibus ipsa minus blanditiis debitis perferendis, ipsam magnam earum quo perspiciatis beatae iure qui! Maiores voluptatum architecto sequi dolorem aliquid amet.',
    // descripcion: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid',
    fechaLanzamiento: new Date(2020, 3, 15)
  }

  productos = [
    'One Plus 8T',
    'Cargador de One Plus',
    'Auriculares Bullet 1+'
  ]

  textoFiltro = 'One';

  mensaje = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Un mensaje');
    }, 1500)
  });

  constructor() { }

  ngOnInit(): void {
    // this.mensaje.then().catch()
  }

  addProducto(event) {
    // this.productos.push(event.target.value);
    // this.temp = this.productos;
    // delete this.productos;
    // this.productos = [].concat(this.productos, event.target.value);
    this.productos = [...this.productos, event.target.value];
    // delete this.temp;
  }

}
