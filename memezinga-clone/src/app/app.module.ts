import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { MemeComponent } from './meme/meme.component';
import { GeneradorMemesComponent } from './generador-memes/generador-memes.component';
import { ListadoMemesComponent } from './listado-memes/listado-memes.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    MemeComponent,
    GeneradorMemesComponent,
    ListadoMemesComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
