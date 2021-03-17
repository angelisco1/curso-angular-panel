import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
    BlinkDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
