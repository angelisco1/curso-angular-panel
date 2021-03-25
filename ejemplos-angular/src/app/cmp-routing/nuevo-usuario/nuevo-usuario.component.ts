import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComponenteCanDeactivate } from '../datos-guardados.guard';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.css']
})
export class NuevoUsuarioComponent implements OnInit, ComponenteCanDeactivate {
  datosGuardados = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  guardar() {
    // Guardamos los datos
    this.datosGuardados = true;
    setTimeout(() => {
      // this.router.navigate(['/']);
      this.router.navigateByUrl('/');
    }, 1000);
  }

  canDeactivate(): boolean {
    return this.datosGuardados ? true : confirm('No has guardado los datos, los vas a perder... ¿Seguro que quieres salir de aquí?');
  }
}
