import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBlink]'
})
export class BlinkDirective {

  // @HostBinding('attr.disabled') btnDisabled: boolean;
  // @HostBinding('class') colorFondo: string;
  @HostBinding('style.backgroundColor') colorFondo: string;
  @Input('appBlink') color = 'greenyellow';
  colorInicial = 'white';
  intervalId = null;

  constructor() {
    console.log('Directiva Blink')
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
