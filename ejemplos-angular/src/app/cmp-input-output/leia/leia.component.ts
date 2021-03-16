import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-leia',
  templateUrl: './leia.component.html',
  styleUrls: ['./leia.component.css']
})
export class LeiaComponent implements OnInit {

  @Input() yo;
  @Output() leiaCambiada = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  cambiarLeia(inputValue) {
    // console.log(inputValue)
    this.leiaCambiada.emit(inputValue);
  }

}
