import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { MemesService } from '../memes.service';

@Component({
  selector: 'app-listado-memes',
  templateUrl: './listado-memes.component.html',
  styleUrls: ['./listado-memes.component.css']
})
export class ListadoMemesComponent implements OnInit {
  memes: Array<any> = [];
  constructor(private memesServ: MemesService) { }

  ngOnInit(): void {
    this.memesServ.getMemes()
      .subscribe(memes => {
        this.memes = memes;
      });
  }

  eliminar(id) {
    this.memesServ.eliminarMeme(id).subscribe(() => {
      Swal.fire({
        icon: 'error',
        title: 'El meme se ha eliminado',
        showConfirmButton: false,
        timer: 1500
      })
    })
  }

  darLike(id, numLikes) {
    this.memesServ.updateLikes(id, numLikes + 1).subscribe(() => {
      Swal.fire({
        icon: 'success',
        title: '+1',
        showConfirmButton: false,
        timer: 1500
      })
    })
  }
}
