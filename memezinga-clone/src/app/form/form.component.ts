import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { MemesService } from '../memes.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() meme = null;
  formulario: FormGroup;

  constructor(private memesServ: MemesService, private router: Router) { }

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

  guardar() {
    const nuevoMeme = this.formulario.value;
    nuevoMeme.likes = 0;
    this.memesServ.crearMeme(nuevoMeme)
      .subscribe(() => {
        Swal.fire({
          icon: 'success',
          title: 'El meme se ha guardado',
          showConfirmButton: false,
          timer: 1500
        }).then(() => {
          this.router.navigate(['/todos-los-memes']);
        })
      })
  }
}
