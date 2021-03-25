import { Routes, RouterModule } from '@angular/router';
import { DatosGuardadosGuard } from './datos-guardados.guard';
import { Error404Component } from './error404/error404.component';
import { InfoUsuarioComponent } from './info-usuario/info-usuario.component';
import { NuevoUsuarioComponent } from './nuevo-usuario/nuevo-usuario.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { USUARIOS_ROUTES } from './usuarios/usuarios.routes';

const APP_ROUTES: Routes = [
  { path: 'usuarios', component: UsuariosComponent, children: USUARIOS_ROUTES },
  { path: '', redirectTo: 'usuarios', pathMatch: 'full' },
  { path: 'nuevo-usuario', component: NuevoUsuarioComponent, canDeactivate: [DatosGuardadosGuard] },
  // { path: 'usuarios/:userId/info', component: InfoUsuarioComponent },
  {
    path: 'admin',
    // loadChildren: () => import('../admin/admin.module').then(({AdminModule}) => AdminModule)
    loadChildren: () => import('../admin/admin.module').then(module => module.AdminModule)
  },
  { path: '**', component: Error404Component },
];

export const RoutingModule = RouterModule.forRoot(APP_ROUTES);