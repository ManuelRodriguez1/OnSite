
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearUsuarioComponent } from '../components/Login/crear-usuario/crear-usuario.component';
import { InicioSesionComponent } from '../components/Login/inicio-sesion/inicio-sesion.component';
import { LibreriaComponent } from '../components/libreria/libreria.component';
import { HireComponent } from '../components/hire/hire.component';
import { AuthGuard } from '../service/auth.service';
//JoinPro
import { RegistroComponent } from '../components/JoinPro/registro/registro.component';
export const router: Routes = [
  { path: 'libreria', component: LibreriaComponent },
  { path: 'Registry', component: CrearUsuarioComponent },
  { path: 'login', component: InicioSesionComponent },
  { path: 'Hire', component: HireComponent },
  { path: 'registroPro', component: RegistroComponent },
    //  { path: 'members', component: AuthGuard, canActivate: [AuthGuard] }//login
   ]


export const routes: ModuleWithProviders = RouterModule.forRoot(router);
