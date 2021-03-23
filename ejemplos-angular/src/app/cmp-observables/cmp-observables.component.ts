import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, Observable, Subscription } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';

@Component({
  selector: 'app-cmp-observables',
  templateUrl: './cmp-observables.component.html',
  styleUrls: ['./cmp-observables.component.css']
})
export class CmpObservablesComponent implements OnInit {
  subscriptions: Array<Subscription> = [];
  constructor() { }

  ngOnInit(): void {
    // this.obsInterval();
    // this.obsMiObservable();
    // this.obsOperadores();
    this.obsFromEvent();
  }

  obsInterval() {
    const obs = interval(500);

    const subs = obs.subscribe((num) => {
      console.log(num);
    });

    this.subscriptions.push(subs);
  }

  obsMiObservable() {
    const miObs = new Observable((observer) => {
      setTimeout(() => {
        observer.next('Un dato');
      }, 1000);

      setTimeout(() => {
        observer.complete();
      }, 1500);
    });

    const subs = miObs.subscribe(
      (dato) => console.log(dato),
      (err) => console.log(err),
      () => console.log('Fin del observable')
    )

    this.subscriptions.push(subs);
  }

  obsOperadores() {
    const obs = interval(500)
      .pipe(
        filter(num => num % 2 === 0),
        map(num => 'Mensajes no leidos: ' + num),
        take(3)
      )

    obs.subscribe((num) => {
      console.log(num);
    })
  }

  obsFromEvent() {
    const obs = fromEvent(document, 'mousemove')
      .pipe(
        map((event: MouseEvent) => {
          return {
            posX: event.clientX,
            posY: event.clientY,
            tipo: event.type
          }
        })
      )

    obs.subscribe((datosDelEvento) => {
      console.log(datosDelEvento);
    })
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
