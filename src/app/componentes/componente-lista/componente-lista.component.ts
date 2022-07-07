import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-lista',
  templateUrl: './componente-lista.component.html',
  styleUrls: ['./componente-lista.component.css']
})
export class ComponenteListaComponent implements OnInit {

  alumnos = [
    { Nombre: 'Exequiel Delgado', Edad: '31', Ocupacion: 'Lider de equipo' }, 
    { Nombre: 'Julian Rombola', Edad: '28', Ocupacion: 'Desarrollador SR' },
    { Nombre: 'Guillermo Federicchi', Edad: '34', Ocupacion: 'Lider de equipo' },
    { Nombre: 'Bart Simpson', Edad: '12', Ocupacion: 'Estudiante' },
    { Nombre: 'Pepe Garcia', Edad: '50', Ocupacion: 'Gerente' }
  ];
  
  encabezados = ['Nombre','Edad','Ocupacion'];

  mostrarAlumnos = false;
  

  public porArriba = false;

  constructor() { }

  ngOnInit(): void {
  }

  public mostrarMensaje(NombreAgregado: string,EdadAgregada: number,OcupacionAgregada: string){
    this.alumnos.push({Nombre: NombreAgregado, Edad: EdadAgregada.toString(), Ocupacion: OcupacionAgregada});
    this.mostrarAlumnos = true;
  }

}

