import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-componente-lista',
  templateUrl: './componente-lista.component.html',
  styleUrls: ['./componente-lista.component.css'],  
})
export class ComponenteListaComponent implements OnInit, AfterViewInit  {

  displayedColumns: string[] = ['name', 'age', 'jobs', 'Acciones'];
  dataSource = new MatTableDataSource<alumnos>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
/*
  alumnos = [
    { Nombre: 'Exequiel Delgado', Edad: '31', Ocupacion: 'Lider de equipo' }, 
    { Nombre: 'Julian Rombola', Edad: '28', Ocupacion: 'Desarrollador SR' },
    { Nombre: 'Guillermo Federicchi', Edad: '34', Ocupacion: 'Lider de equipo' },
    { Nombre: 'Bart Simpson', Edad: '12', Ocupacion: 'Estudiante' },
    { Nombre: 'Pepe Garcia', Edad: '50', Ocupacion: 'Gerente' }
  ];*/
  
  encabezados = ['Nombre','Edad','Ocupacion'];
  jQuery:any;
  columnas =[
    {titulo: "Nombre", name: "name"},
    {titulo: "Edad", name: "age"},
    {titulo: "Ocupacion", name: "jobs"},  
  ]

  mostrarAlumnos = true;

  public porArriba = false;

  public esEditar = false;

  //Datos de los alumnos a editar
  public nombreAlumno: string;
  public edadAlumno: number;
  public ocupacionAlumno: string;
  public indiceSeleccionado: number;
  //Fin Datos de los alumnos a editar

  constructor(private elementRef:ElementRef) { }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
  }

  public agregarAlumno(NombreAgregado: string,EdadAgregada: number,OcupacionAgregada: string){
    /*this.alumnos.push({Nombre: NombreAgregado, Edad: EdadAgregada.toString(), Ocupacion: OcupacionAgregada});*/
    this.dataSource.data.unshift({name: NombreAgregado, age: EdadAgregada, jobs: OcupacionAgregada});
    this.dataSource._updateChangeSubscription();
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
    this.dataSource.data.splice(indice,indice + 1);
    this.dataSource._updateChangeSubscription();
  }

  nuevoAlumno(){
    this.esEditar = false;
    this.nombreAlumno = '';
    this.edadAlumno = 0;
    this.ocupacionAlumno = '';
  }

  editarAlumnoModal(indice: number){
    console.log("Ingreso");
    this.nombreAlumno = this.dataSource.data[indice].name;
    this.edadAlumno = this.dataSource.data[indice].age;
    this.ocupacionAlumno = this.dataSource.data[indice].jobs;
    console.log(this.nombreAlumno);
    this.esEditar = true;
    this.indiceSeleccionado = indice;
    ($('#exampleModal') as any).modal('show');
  }

  editarElAlumno(NombreAgregado: string,EdadAgregada: number,OcupacionAgregada: string, indice: number){
    this.dataSource.data[indice].name = NombreAgregado;
    this.dataSource.data[indice].age = EdadAgregada;
    this.dataSource.data[indice].jobs = OcupacionAgregada;
    this.dataSource._updateChangeSubscription();
    ($('#exampleModal') as any).modal('hide');
  }

}



export interface alumnos {
  name: string;
  age: number;
  jobs: string;
}

const ELEMENT_DATA: alumnos[] = [
  {name: 'Exequiel Delgado', age: 31, jobs: 'Lider de equipo'},
  {name: 'Julian Rombola', age: 31, jobs: 'Desarrollador SR'},
  {name: 'Guillermo Federicchi', age: 31, jobs: 'Lider de equipo'},
  {name: 'Bart Simpson', age: 31, jobs: 'Estudiante'},
  {name: 'Pepe Garcia', age: 31, jobs: 'Gerente'},
  {name: 'Leandro Fex', age: 31, jobs: 'Desarrollador SR'},
  {name: 'Alberto Max', age: 31, jobs: 'Desarrollador SR'},
];


