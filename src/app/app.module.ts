import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Questao1Component } from './components/questao1/questao1.component';
import { Questao2Component } from './components/questao2/questao2.component';
import { Questao3Component } from './components/questao3/questao3.component';
import { Questao4Component } from './components/questao4/questao4.component';
import { Questao5Component } from './components/questao5/questao5.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    Questao1Component,
    Questao2Component,
    Questao3Component,
    Questao4Component,
    Questao5Component,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
