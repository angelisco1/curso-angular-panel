import { Component, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';

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
    this.obsMiObservable();
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

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
