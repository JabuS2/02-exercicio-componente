import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeiroComponenteComponent } from './primeiro-componente/primeiro-componente.component';

import { FormsModule } from '@angular/forms';
import { SegundoComponenteComponent } from './segundo-componente/segundo-componente.component'

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponenteComponent,
    SegundoComponenteComponent
  ],
  imports: [
    FormsModule, 
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
