import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() meme = null;
  formulario: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.formulario = new FormGroup({
      texto1: new FormControl(this.meme.texto1),
      texto2: new FormControl(this.meme.texto2),
      imagen: new FormControl(this.meme.imagen),
      color: new FormControl(this.meme.color)
    });

    this.formulario.valueChanges.subscribe((cambios) => {
      // console.log({cambios})
      Object.assign(this.meme, cambios);
    })
  }

  actualizarMeme() {
    this.meme = this.formulario.value;
  }
}
