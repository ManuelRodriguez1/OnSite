import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LibreriaComponent } from './components/libreria/libreria.component';

//Rutas
import { routes } from './routes/routes';
//import { CrearUsuarioComponent } from './components/Login/crear-usuario/crear-usuario.component';
import { InicioSesionComponent } from './components/Login/inicio-sesion/inicio-sesion.component';
import { RecordarPasswordComponent } from './components/Login/recordar-password/recordar-password.component';

//Inicio Librerias de autenticaciòn
import * as firebase from 'firebase/app';
import { environment } from '../environments/environment';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';


import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule, AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthGuard } from './service/auth.service';
import { HireComponent } from './components/JoinHire/hire.component';
import { HeaderComponent } from './components/header/header.component';

//JoinPro

import { RegistroComponent } from './components/JoinPro/registro/registro.component';
import { SelectComponent } from './components/JoinPro/registro/select/select.component';
import { HomeComponent } from './components/home/home.component';
import { HirePriComponent } from './components/hire-pri/hire-pri.component';

//Fin Librerias de autenticaciòn
@NgModule({
  declarations: [
    AppComponent,
    LibreriaComponent,
  //  CrearUsuarioComponent,
    InicioSesionComponent,
    RecordarPasswordComponent,
    HireComponent,
    HeaderComponent,
    RegistroComponent,
    SelectComponent,
    HomeComponent,
    HirePriComponent
  ],
  imports: [
    HttpModule,
    HttpClientModule,
    BrowserModule,
    routes,
    FormsModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  //providers: [AuthGuard,AngularFirestore,MatStepperIntl,ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
