import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-toolbar',
  templateUrl: './componente-toolbar.component.html',
  styleUrls: ['./componente-toolbar.component.css']
})
export class ComponenteToolbarComponent implements OnInit {

  public nombre ="Exequiel Delgado";
  public porArriba = false;

  fecha = new Date();

  constructor() { }

  ngOnInit(): void {
  }

  nombreAlumno(variable: string){
      return variable;
  }

}
