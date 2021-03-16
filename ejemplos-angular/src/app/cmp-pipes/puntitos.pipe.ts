import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'puntitos'
})
export class PuntitosPipe implements PipeTransform {

  transform(value: string, numCaracteres: number = 100): string {
    // if (value.length >= 100) {
    //   return value + '...'
    // } else {
    //   return value;
    // }

    return value.length >= numCaracteres ? `${value}...` : value;
  }

}
