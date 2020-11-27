import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/pages';

const routes: Routes = [
    { path: '', component: HomeComponent}
];

export const appRoutingModule = RouterModule.forRoot(routes);
