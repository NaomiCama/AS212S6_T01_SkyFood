import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrasferenciaComponent } from './Components/trasferencia/trasferencia.component';
import { FormsModule } from '@angular/forms';
import { LandingComponent } from './pages/landing/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    TrasferenciaComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
  