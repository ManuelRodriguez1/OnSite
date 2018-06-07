import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LibreriaComponent } from './components/libreria/libreria.component';

//Rutas
import { app_routing } from './routes/routes';


@NgModule({
  declarations: [
    AppComponent,
    LibreriaComponent
  ],
  imports: [
    BrowserModule,
    app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
