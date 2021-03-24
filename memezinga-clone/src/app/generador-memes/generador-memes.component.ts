import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generador-memes',
  templateUrl: './generador-memes.component.html',
  styleUrls: ['./generador-memes.component.css']
})
export class GeneradorMemesComponent implements OnInit {
  memeInicial = {
    texto1: 'Texto 1',
    texto2: 'Texto 2',
    imagen: 'https://i.imgflip.com/1bij.jpg',
    // color: '#ffffff'
    color: '#000000'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
