import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';

@Component({
  selector: 'app-info-usuario',
  templateUrl: './info-usuario.component.html',
  styleUrls: ['./info-usuario.component.css']
})
export class InfoUsuarioComponent implements OnInit {
  userId = '';
  usuario: any = null;
  mostrarTodaLaInfo = true;

  constructor(private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private location: Location
    ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.userId = params.get('userId')
      const state: any = this.location.getState();
        if (state.usuario) {
        console.log('PASA')
        this.usuario = state.usuario;
      } else {
        console.log('GET')
        this.http.get('http://jsonplaceholder.typicode.com/users/' + this.userId)
          .subscribe(usuario => {
            this.usuario = usuario;
          })
      }
    })

    this.activatedRoute.queryParamMap.subscribe(queryParams => {
      if (queryParams.has('todalainfo')) {
        this.mostrarTodaLaInfo = queryParams.get('todalainfo') === 'true';
      }
    })
  }

}
