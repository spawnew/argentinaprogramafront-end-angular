import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

  constructor(private datosporfolio:PorfolioService) { }
this.datosporfolio.obtenerdatos()
console.log("hola");
  ngOnInit(): void {
  }

}
