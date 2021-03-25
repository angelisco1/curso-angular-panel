import { RouterModule, Routes } from "@angular/router";
import { GeneradorMemesComponent } from "./generador-memes/generador-memes.component";
import { ListadoMemesComponent } from "./listado-memes/listado-memes.component";

const APP_ROUTES: Routes = [
  { path: '', component: GeneradorMemesComponent },
  { path: 'todos-los-memes', component: ListadoMemesComponent },
]

export const AppRouterModule = RouterModule.forRoot(APP_ROUTES);