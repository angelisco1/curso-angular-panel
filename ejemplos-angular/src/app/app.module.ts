import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CmpDataBindingComponent } from './cmp-data-binding/cmp-data-binding.component';
import { CmpInputOutputComponent } from './cmp-input-output/cmp-input-output.component';
import { SugusComponent } from './cmp-input-output/sugus/sugus.component';
import { LukeComponent } from './cmp-input-output/luke/luke.component';
import { LeiaComponent } from './cmp-input-output/leia/leia.component';
import { CmpPipesComponent } from './cmp-pipes/cmp-pipes.component';
import { PuntitosPipe } from './cmp-pipes/puntitos.pipe';
import { FiltroPipe } from './cmp-pipes/filtro.pipe';
import { CmpDirectivasComponent } from './cmp-directivas/cmp-directivas.component';
import { BlinkDirective } from './cmp-directivas/blink.directive';
import { CmpFormulariosComponent } from './cmp-formularios/cmp-formularios.component';
import { ReactivosComponent } from './cmp-formularios/reactivos/reactivos.component';
import { PlantillaComponent } from './cmp-formularios/plantilla/plantilla.component';
import { ErrorComponent } from './cmp-formularios/error/error.component';
import { CmpServiciosComponent } from './cmp-servicios/cmp-servicios.component';
import { ProductosAComponent } from './cmp-servicios/productos-a/productos-a.component';
import { ProductosBComponent } from './cmp-servicios/productos-b/productos-b.component';
import { CmpObservablesComponent } from './cmp-observables/cmp-observables.component';

@NgModule({
  declarations: [
    AppComponent,
    CmpDataBindingComponent,
    CmpInputOutputComponent,
    SugusComponent,
    LukeComponent,
    LeiaComponent,
    CmpPipesComponent,
    PuntitosPipe,
    FiltroPipe,
    CmpDirectivasComponent,
    BlinkDirective,
    CmpFormulariosComponent,
    ReactivosComponent,
    PlantillaComponent,
    ErrorComponent,
    CmpServiciosComponent,
    ProductosAComponent,
    ProductosBComponent,
    CmpObservablesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
