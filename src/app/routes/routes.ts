
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { CrearUsuarioComponent } from '../components/Login/crear-usuario/crear-usuario.component';
import { HirePriComponent} from '../components/hire-pri/hire-pri.component';
import { InicioSesionComponent } from '../components/Login/inicio-sesion/inicio-sesion.component';
import { LibreriaComponent } from '../components/libreria/libreria.component';
import { HireComponent } from '../components/JoinHire/hire.component';
import { AuthGuard } from '../service/auth.service';
import { HomeComponent } from '../components/home/home.component';
//JoinPro
import { RegistroComponent } from '../components/JoinPro/registro/registro.component';





//menu ya menuYaLoguiado

export const router: Routes = [
  { path: 'libreria', component: LibreriaComponent },
  { path: 'HirePriComponent', component: HirePriComponent },
  { path: 'login', component: InicioSesionComponent },
  { path: 'registroHire', component: HireComponent },
  { path: 'registroPro', component: RegistroComponent },
  { path: '', component: HomeComponent }
    //  { path: 'members', component: AuthGuard, canActivate: [AuthGuard] }//login
   ]


export const routes: ModuleWithProviders = RouterModule.forRoot(router);
