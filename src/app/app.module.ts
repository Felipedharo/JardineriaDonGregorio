import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LandingPComponent } from './pages/landing-p/landing-p.component';
import { PaginaserviceComponent } from './pages/paginaservice/paginaservice.component';
import { Paginasservicio2Component } from './pages/paginasservicio2/paginasservicio2.component';
import { Paginasservicio3Component } from './pages/paginasservicio3/paginasservicio3.component';
import { Paginasservicio4Component } from './pages/paginasservicio4/paginasservicio4.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingPComponent,
    PaginaserviceComponent,
    Paginasservicio2Component,
    Paginasservicio3Component,
    Paginasservicio4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
