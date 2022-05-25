import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarGuard } from './pages/carPage/car.guard';

const routes: Routes = [
  {
    path: '', loadChildren: () => import('./pages/landing/landing.module').then(m => m.LandingModule),
  },
  {
    path: 'car', loadChildren: () => import('./pages/carPage/car.module').then(m => m.CarModule), canActivate: [CarGuard]
  },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
