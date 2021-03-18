import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit, OnChanges {

  @Input() error;
  errorKey: string;

  constructor() { }

  ngOnChanges(changes) {
    // console.log(changes);
    if (!changes.error.previousValue || (!changes.error.firstChange && Object.keys(changes.error.currentValue)[0] !==  Object.keys(changes.error.previousValue)[0])) {
      console.log('Cambia el errorKey', changes)
      this.errorKey = Object.keys(this.error)[0];
    }
  }

  ngOnInit(): void {
  //   console.log(this.error);
  //   this.errorKey = Object.keys(this.error)[0];
  }

}
