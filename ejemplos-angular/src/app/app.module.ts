import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

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
import { ProductosB1Component } from './cmp-servicios/productos-b1/productos-b1.component';
import { ProductosService } from './cmp-servicios/productos.service';
import { CmpHttpComponent } from './cmp-http/cmp-http.component';

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
    CmpObservablesComponent,
    ProductosB1Component,
    CmpHttpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: 'instanciaA', useClass: ProductosService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
