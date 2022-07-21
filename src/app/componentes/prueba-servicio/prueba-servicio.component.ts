import { Component, OnInit } from '@angular/core';
import { ServicioAlumnosService } from 'src/app/servicios/servicio-alumnos.service';

@Component({
  selector: 'app-prueba-servicio',
  templateUrl: './prueba-servicio.component.html',
  styleUrls: ['./prueba-servicio.component.css']
})
export class PruebaServicioComponent implements OnInit {

  constructor(
    public pruebaServicio: ServicioAlumnosService
  ) { }

  ngOnInit(): void {
   // this.pruebaServicio.sayHi();
   // console.log(this.pruebaServicio.datos);
  }

}
