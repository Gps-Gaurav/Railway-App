import { Routes } from '@angular/router';
import { SearchComponent } from './pages/search/search.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path:'',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'search/:fromStationId/:toStationId/:dateOfTravel',
    component: SearchComponent
  }
];
