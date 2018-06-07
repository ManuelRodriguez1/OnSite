import { RouterModule, Routes } from '@angular/router';

import { LibreriaComponent } from '../components/libreria/libreria.component';

//JoinPro
import { RegistroComponent } from '../components/JoinPro/registro/registro.component';

const app_routes: Routes = [
    { path: 'libreria', component: LibreriaComponent },
    { path: 'registroPro', component: RegistroComponent }
];

export const app_routing = RouterModule.forRoot(app_routes);