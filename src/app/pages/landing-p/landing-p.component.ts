import { Component, OnInit } from '@angular/core';
import { InfopaginaService } from 'src/app/Services/infopagina.service';
import { LosserviciosService } from 'src/app/Services/losservicios.service';

@Component({
  selector: 'app-landing-p',
  templateUrl: './landing-p.component.html',
  styleUrls: ['./landing-p.component.css']
})
export class LandingPComponent implements OnInit {

  constructor(public infopagina: InfopaginaService,
              public losservis: LosserviciosService) {

                
               }

  ngOnInit() {
  }

}
