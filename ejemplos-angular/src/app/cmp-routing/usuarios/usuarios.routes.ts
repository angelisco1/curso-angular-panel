import { Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { InfoUsuarioComponent } from '../info-usuario/info-usuario.component';

export const USUARIOS_ROUTES: Routes = [
  { path: ':userId/info', component: InfoUsuarioComponent, canActivate: [AuthGuard] }
]