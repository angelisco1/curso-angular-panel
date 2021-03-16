import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro',
  // pure: false
})
export class FiltroPipe implements PipeTransform {

  transform(value: Array<string>, textoFiltro: string): Array<string> {
    console.log('PASA POR EL PIPE')
    return value.filter((prod) => {
      return prod.toLowerCase().includes(textoFiltro.toLowerCase());
    });
  }

}
