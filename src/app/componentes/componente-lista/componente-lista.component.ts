import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ServicioAlumnosService } from 'src/app/servicios/servicio-alumnos.service';


@Component({
  selector: 'app-componente-lista',
  templateUrl: './componente-lista.component.html',
  styleUrls: ['./componente-lista.component.css'],  
})
export class ComponenteListaComponent implements OnInit, AfterViewInit  {

  
@ViewChild(MatPaginator) paginator: MatPaginator;
/*
  alumnos = [
    { Nombre: 'Exequiel Delgado', Edad: '31', Ocupacion: 'Lider de equipo' }, 
    { Nombre: 'Julian Rombola', Edad: '28', Ocupacion: 'Desarrollador SR' },
    { Nombre: 'Guillermo Federicchi', Edad: '34', Ocupacion: 'Lider de equipo' },
    { Nombre: 'Bart Simpson', Edad: '12', Ocupacion: 'Estudiante' },
    { Nombre: 'Pepe Garcia', Edad: '50', Ocupacion: 'Gerente' }
  ];*/
  
 
  jQuery:any;
  

  mostrarAlumnos = true;

  public porArriba = false;

  public esEditar = false;

  //Datos de los alumnos a editar
  public nombreAlumno: string;
  public edadAlumno: number;
  public ocupacionAlumno: string;
  public indiceSeleccionado: number;
  //Fin Datos de los alumnos a editar

  constructor(private elementRef:ElementRef,
              public servicioAlumno: ServicioAlumnosService) { }
  ngAfterViewInit(): void {
    this.servicioAlumno.paginadorAfterView(this.paginator);
  }

  ngOnInit(): void {
  }

  public agregarAlumno(NombreAgregado: string,EdadAgregada: number,OcupacionAgregada: string){
    /*this.alumnos.push({Nombre: NombreAgregado, Edad: EdadAgregada.toString(), Ocupacion: OcupacionAgregada});*/
   
    this.mostrarAlumnos = true;
    console.log(document.getElementById("exampleModal"));
    ($('#exampleModal') as any).modal('hide');
  }

  

  cambiarMostrarAlumnos(entrada: boolean){
    this.mostrarAlumnos = entrada;
  }

  cambiarPorArriba(entrada: boolean){
    this.porArriba = entrada;
  }
  
  eliminarAlumno(indice: number){
    /*this.dataSource.data.splice(indice,indice + 1);
    this.dataSource._updateChangeSubscription();*/
  }

  

  editarAlumnoModal(indice: number){
    this.servicioAlumno.setearAlumnoAEditar(indice);
    ($('#exampleModal') as any).modal('show');
  }

  cerrarModal(){
    ($('#exampleModal') as any).modal('hide');
  }

}




