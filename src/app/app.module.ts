import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LibreriaComponent } from './components/libreria/libreria.component';

import { AngularFireDatabaseModule } from 'angularfire2/database';
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


import { AngularFireModule } from 'angularfire2';

// import { HttpModule } from '@angular/http';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
// import { AngularFirestoreModule, AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
// import { AuthGuard } from './service/auth.service';

import { AuthGuard } from './service/auth.service';
import { HireComponent } from './components/JoinHire/Registro/hire.component';
import { HeaderComponent } from './components/header/header.component';


//JoinPro

import { RegistroComponent } from './components/JoinPro/registro/registro.component';
import { SelectComponent } from './components/JoinPro/registro/select/select.component';
import { HomeComponent } from './components/home/home.component';
import { HirePriComponent } from './components/JoinHire/home/hire-pri.component';

//Fin Librerias de autenticaciòn

//Servicio

import { ServiceService } from './service/service.service';
import { ReviewsComponent } from './components/JoinPro/registro/reviews/reviews.component';
import { PerfilComponent } from './components/JoinPro/perfil/perfil.component';
import { HomeproComponent } from './components/JoinPro/perfil/homepro/homepro.component';
import { InboxComponent } from './components/JoinPro/perfil/inbox/inbox.component';
import { RegistroclientesComponent } from './registroclientes/registroclientes.component';
import { OpenComponent } from './components/JoinPro/perfil/projects/open/open.component';
import { ExploreComponent } from './components/JoinPro/perfil/explore/explore.component';
//import { ChatFormComponent } from './chat/chat-form/chat-form.component';
import { FeedComponent } from './chat/feed/feed.component';
import { MessageComponent } from './chat/message/message.component';
import { UserListComponent } from './chat/user-list/user-list.component';
import { UserItemsComponent } from './chat/user-items/user-items.component';
import { ChatService } from './chat/chat.service';
import { MenuhomeComponent } from './components/JoinHire/home/menuhome/menuhome.component';
import { MenuinboxComponent } from './components/JoinHire/home/menuinbox/menuinbox.component';
import { MenuprojectsComponent } from './components/JoinHire/home/menuprojects/menuprojects.component';
import { MenutrackComponent } from './components/JoinHire/home/menutrack/menutrack.component';
import { MenuexploreComponent } from './components/JoinHire/home/menuexplore/menuexplore.component';
import { MenunewproyectComponent } from './components/JoinHire/home/menunewproyect/menunewproyect.component';




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
    HirePriComponent,
    ReviewsComponent,
    PerfilComponent,
    HomeproComponent,
    InboxComponent,
    RegistroclientesComponent,
    OpenComponent,
    ExploreComponent,
    //ChatFormComponent,
    FeedComponent,
    MessageComponent,
    UserListComponent,
    UserItemsComponent,
    MenuhomeComponent,
    MenuinboxComponent,
    MenuprojectsComponent,
    MenutrackComponent,
    MenuexploreComponent,
    MenunewproyectComponent

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
    AngularFireDatabaseModule
  ],
  //providers: [AuthGuard,AngularFirestore,MatStepperIntl,ServiceService],
  providers:[ServiceService,ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
