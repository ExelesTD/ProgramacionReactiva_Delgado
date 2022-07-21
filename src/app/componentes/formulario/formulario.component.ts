import { Component, Input, OnChanges, OnInit, SimpleChanges, DoCheck } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective, NgForm} from '@angular/forms';
import { ComponenteListaComponent } from '../componente-lista/componente-lista.component';
import {ErrorStateMatcher} from '@angular/material/core';
import { ServicioAlumnosService } from 'src/app/servicios/servicio-alumnos.service';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit, OnChanges, DoCheck{
  formSnapshot: any;

  formulario: FormGroup = new FormGroup({
    $key: new FormControl(null),
    nombre: new FormControl('',Validators.required),
    edad: new FormControl(null,[Validators.max(99), Validators.required]),
    ocupacion: new FormControl('',Validators.required),
  })
/*
  esModificar: boolean;
  nombreAEditar: string;
  edadAEditar: number;
  ocupacionAEditar: string;
  indiceTabla: number;*/
  /*public formulario: FormGroup;*/
  

  constructor(
      private fb: FormBuilder,
      private comp: ComponenteListaComponent,
      public servicioAlumno: ServicioAlumnosService
    ){      
      /*this.formulario = this.fb.group({
          nombre: [null,[Validators.required]],
          edad: [null,[Validators.required,Validators.max(99)]],
          ocupacion: [null,[Validators.required]]
      });*/
   }
  ngDoCheck(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.formulario.get('nombre')?.setValue(this.servicioAlumno.nombreAlumno);
    this.formulario.get('edad')?.setValue(this.servicioAlumno.edadAlumno);
    this.formulario.get('ocupacion')?.setValue(this.servicioAlumno.ocupacionAlumno);
    console.log("el nombre: " + this.formulario.get('nombre')?.value)
  }

  public cargarFormulario(){
    this.formulario.get('nombre')?.setValue(this.servicioAlumno.nombreAlumno);
    this.formulario.get('edad')?.setValue(this.servicioAlumno.edadAlumno);
    this.formulario.get('ocupacion')?.setValue(this.servicioAlumno.ocupacionAlumno);
    console.log("el nombre: " + this.formulario.get('nombre')?.value)
  }

  ngOnInit(): void {
  }

  submit(valorFormulario: any){
    var nombreAAgregar: string = this.formulario.get('nombre')?.value;
    var edadAAgregar: number = this.formulario.get('edad')?.value;
    var ocupacionAAgregar: string = this.formulario.get('ocupacion')?.value;
    var indice: number = this.servicioAlumno.indiceSeleccionado;
    

    if(this.formulario.valid){
      if(this.servicioAlumno.esEditar){
        this.servicioAlumno.editarAlumno(nombreAAgregar,edadAAgregar,ocupacionAAgregar,indice);
        this.formulario.reset();
        this.comp.cerrarModal();
      }
      else{
        this.servicioAlumno.agregarAlumno(nombreAAgregar,edadAAgregar,ocupacionAAgregar);
        this.comp.cerrarModal();
        this.formulario.reset();
      }      
    }
    else{
      if(this.formulario.get('nombre')?.status == 'INVALID'){
          console.log("Error en el nombre");
      };
      if(this.formulario.get('edad')?.status == 'INVALID'){
          console.log("Error en la edad");
      };
      if(this.formulario.get('ocupacion')?.status == 'INVALID'){
          console.log("Error en la ocupacion");
      };
    }
    console.log();
    
  }

  initFormulario(){
    this.formulario.setValue({
      $key: null,
      nombre: '',
      edad: null,
      ocupacion: '',
    })
  }
  
  get nombre() { return this.formulario.get('nombre');}

}


