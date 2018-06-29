
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { CrearUsuarioComponent } from '../components/Login/crear-usuario/crear-usuario.component';
import { HirePriComponent} from '../components/JoinHire/home/hire-pri.component';
import { InicioSesionComponent } from '../components/Login/inicio-sesion/inicio-sesion.component';
import { LibreriaComponent } from '../components/libreria/libreria.component';
import { HireComponent } from '../components/JoinHire/Registro/hire.component';
import { AuthGuard } from '../service/auth.service';
import { HomeComponent } from '../components/home/home.component';
//JoinPro
import { RegistroComponent } from '../components/JoinPro/registro/registro.component';
import { PerfilComponent } from '../components/JoinPro/perfil/perfil.component';

import { RegistroclientesComponent } from '../registroclientes/registroclientes.component';


//menu ya menuYaLoguiado

export const router: Routes = [
   { path: 'libreria', component: LibreriaComponent },
   { path: 'HirePriComponent', component: HirePriComponent },
   { path: 'login', component: InicioSesionComponent },
   { path: 'registroHire', component: HireComponent },
  { path: 'registroPro', component: RegistroComponent },
   { path: 'perfilPro', component: PerfilComponent },
  { path: 'Registro', component: RegistroclientesComponent },
  { path: '', component: HomeComponent },
  { path: 'HirePriComponent', component: AuthGuard, canActivate: [AuthGuard] }//login
   ]


export const routes: ModuleWithProviders = RouterModule.forRoot(router);
