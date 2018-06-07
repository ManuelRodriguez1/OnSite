import { RouterModule, Routes } from '@angular/router';

import { LibreriaComponent } from '../components/libreria/libreria.component';

const app_routes: Routes = [
    { path: 'libreria', component: LibreriaComponent }
];

export const app_routing = RouterModule.forRoot(app_routes);