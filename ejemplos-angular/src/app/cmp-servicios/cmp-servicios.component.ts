import { Component, OnInit } from '@angular/core';
import { ComunicacionService } from './comunicacion.service';

@Component({
  selector: 'app-cmp-servicios',
  templateUrl: './cmp-servicios.component.html',
  styleUrls: ['./cmp-servicios.component.css']
})
export class CmpServiciosComponent implements OnInit {

  constructor(private comunicacionServ: ComunicacionService) { }

  ngOnInit(): void {
    this.comunicacionServ.enviarDato.subscribe((producto) => {
      alert(producto);
    });
  }

  darBienvenida() {
    this.comunicacionServ.escribirMensaje('Bienvenido a nuestra aplicación');
  }

}
