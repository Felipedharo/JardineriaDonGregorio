import { Component } from '@angular/core';
import { InfopaginaService } from './Services/infopagina.service';
import { LosserviciosService } from './Services/losservicios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DonGregorio';

  constructor( public infoPaginaService: InfopaginaService,
    public losService: LosserviciosService ) {

}

}

