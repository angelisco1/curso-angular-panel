import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-input-output',
  templateUrl: './cmp-input-output.component.html',
  styleUrls: ['./cmp-input-output.component.css']
})
export class CmpInputOutputComponent implements OnInit {

  sugus = [
    { sabor: 'piña', color: 'blue' },
    { sabor: 'naranja', color: 'orange' },
    { sabor: 'limón', color: 'yellow' }
  ]

  leia: string = 'Leia Organa';

  constructor() { }

  ngOnInit(): void {
  }

  cambiarLeia(event) {
    this.leia = event;
  }

}
