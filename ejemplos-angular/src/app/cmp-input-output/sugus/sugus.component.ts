import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sugus',
  templateUrl: './sugus.component.html',
  styleUrls: ['./sugus.component.css']
})
export class SugusComponent implements OnInit {

  @Input() color: string = 'red';
  @Input() sabor: string = 'fresa';

  constructor() { }

  ngOnInit(): void {
  }

}
