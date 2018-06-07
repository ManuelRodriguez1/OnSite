import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LibreriaComponent } from './components/libreria/libreria.component';

//Rutas
import { app_routing } from './routes/routes';
import { CrearUsuarioComponent } from './components/Login/crear-usuario/crear-usuario.component';
import { InicioSesionComponent } from './components/Login/inicio-sesion/inicio-sesion.component';
import { RecordarPasswordComponent } from './components/Login/recordar-password/recordar-password.component';

//Inicio Librerias de autenticaciòn
import * as firebase from 'firebase/app';
import { environment } from '../environments/environment';
// import { AngularFireModule } from 'angularfire2';

//JoinPro

import { RegistroComponent } from './components/JoinPro/registro/registro.component';

//Fin Librerias de autenticaciòn
@NgModule({
  declarations: [
    AppComponent,
    LibreriaComponent,
    CrearUsuarioComponent,
    InicioSesionComponent,
    RecordarPasswordComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    app_routing,
    //AngularFireModule.initializeApp(environment.firebase),
  ],
  //providers: [AuthGuard,AngularFirestore,MatStepperIntl,ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
