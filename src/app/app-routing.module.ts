import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPComponent } from './pages/landing-p/landing-p.component';
import { PaginaserviceComponent } from './pages/paginaservice/paginaservice.component';
import { Paginasservicio2Component } from './pages/paginasservicio2/paginasservicio2.component';
import { Paginasservicio3Component } from './pages/paginasservicio3/paginasservicio3.component';
import { Paginasservicio4Component } from './pages/paginasservicio4/paginasservicio4.component';



const app_routes: Routes = [
  { path: 'home', component: LandingPComponent },
  
  { path: 'Servicio1', component: PaginaserviceComponent},
  { path: 'Servicio2', component: Paginasservicio2Component},
  { path: 'Servicio3', component: Paginasservicio3Component},
  { path: 'Servicio4', component: Paginasservicio4Component},
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(app_routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
