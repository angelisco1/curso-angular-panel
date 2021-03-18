import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appBlink]'
})
export class BlinkDirective implements OnInit {

  // @HostBinding('attr.disabled') btnDisabled: boolean;
  // @HostBinding('class') clasesAAñadir: string = tachado;
  @HostBinding('style.backgroundColor') colorFondo: string;
  // @Input('appBlink') color;
  color: string;
  colorInicial = 'white';

  @Input('appBlink') opciones;

  intervalId = null;

  constructor() {
    // console.log('Directiva Blink')
    // console.log(this.color);
  }

  ngOnInit() {
    // this.clasesAAñadir += this.clases.tachado ? 'tachado' : '';

    // console.log(this.color)
    // if (!this.color) {
    //   this.color = 'greenyellow';
    // }
    this.color = this.opciones.color ? this.opciones.color : 'yellowgreen';
    console.log(typeof this.opciones)
    this.colorInicial = this.opciones.colorInicial ? this.opciones.colorInicial : 'white';
  }

  @HostListener('mouseover') onMouseOver() {
    this.intervalId = setInterval(() => {
      this.colorFondo = this.colorFondo === this.color ? this.colorInicial : this.color;
    }, 500)
  }

  @HostListener('mouseout') onMouseOut() {
    clearInterval(this.intervalId);
    this.colorFondo = this.colorInicial;
  }
}
