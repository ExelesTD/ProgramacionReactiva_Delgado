import { AfterViewInit, Injectable, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';



interface alumnos {
  name: string;
  age: number;
  jobs: string;
}


@Injectable({
  providedIn: 'root'
})
export class ServicioAlumnosService implements AfterViewInit {

  displayedColumns: string[] = ['name', 'age', 'jobs', 'Acciones'];
  dataSource = new MatTableDataSource<alumnos>(ELEMENT_DATA);



  encabezados = ['Nombre','Edad','Ocupacion'];

  //Campo Alumno
  public esEditar = false;
  public nombreAlumno: string;
  public edadAlumno: number;
  public ocupacionAlumno: string;
  public indiceSeleccionado: number;
  
  columnas =[
    {titulo: "Nombre", name: "name"},
    {titulo: "Edad", name: "age"},
    {titulo: "Ocupacion", name: "jobs"},  
  ]
  //@ViewChild(MatPaginator) paginator: MatPaginator;

  public agregarAlumno(NombreAgregado: string,EdadAgregada: number,OcupacionAgregada: string){
    /*this.alumnos.push({Nombre: NombreAgregado, Edad: EdadAgregada.toString(), Ocupacion: OcupacionAgregada});*/
    this.dataSource.data.unshift({name: NombreAgregado, age: EdadAgregada, jobs: OcupacionAgregada});
    this.dataSource._updateChangeSubscription();
  }

  public eliminarAlumno(indice: number){
    console.log("pepe" , this.dataSource);
    this.dataSource.data.splice(indice,indice + 1);
    this.dataSource._updateChangeSubscription();
  }

  public setearAlumnoAEditar(indice: number){
    this.nombreAlumno = this.dataSource.data[indice].name;
    this.edadAlumno = this.dataSource.data[indice].age;
    this.ocupacionAlumno = this.dataSource.data[indice].jobs;
    console.log(this.nombreAlumno);
    this.esEditar = true;
    this.indiceSeleccionado = indice;
  }

  public editarAlumno(NombreAgregado: string,EdadAgregada: number,OcupacionAgregada: string, indice: number){
    this.dataSource.data[indice].name = NombreAgregado;
    this.dataSource.data[indice].age = EdadAgregada;
    this.dataSource.data[indice].jobs = OcupacionAgregada;
    this.dataSource._updateChangeSubscription();
  }

  nuevoAlumno(){
    this.esEditar = false;
    this.nombreAlumno = '';
    this.edadAlumno = 0;
    this.ocupacionAlumno = '';
  }
 
  constructor() { }
  ngAfterViewInit(): void {
  }

  public paginadorAfterView(paginator: MatPaginator) {
    console.log("Paginador: ", paginator)
    this.dataSource.paginator = paginator;
  }

  public sayHi() {
    alert('hi!!');
  }
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