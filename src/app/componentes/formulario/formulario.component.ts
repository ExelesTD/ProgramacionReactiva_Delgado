import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective, NgForm} from '@angular/forms';
import { ComponenteListaComponent } from '../componente-lista/componente-lista.component';
import {ErrorStateMatcher} from '@angular/material/core';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit, OnChanges{
  formSnapshot: any;

  formulario: FormGroup = new FormGroup({
    $key: new FormControl(null),
    nombre: new FormControl('',Validators.required),
    edad: new FormControl(null,[Validators.max(99), Validators.required]),
    ocupacion: new FormControl('',Validators.required),
  })

  @Input() esModificar: boolean;
  @Input() nombreAEditar: string;
  @Input() edadAEditar: number;
  @Input() ocupacionAEditar: string;
  @Input() indiceTabla: number;

  /*public formulario: FormGroup;*/
  

  constructor(
      private fb: FormBuilder,
      private comp: ComponenteListaComponent
    ){      
      /*this.formulario = this.fb.group({
          nombre: [null,[Validators.required]],
          edad: [null,[Validators.required,Validators.max(99)]],
          ocupacion: [null,[Validators.required]]
      });*/
   }
  ngOnChanges(changes: SimpleChanges): void {
    this.formulario.get('nombre')?.setValue(this.nombreAEditar);
    this.formulario.get('edad')?.setValue(this.edadAEditar);
    this.formulario.get('ocupacion')?.setValue(this.ocupacionAEditar);
    console.log(this.formulario.get('nombre')?.value)
  }



  ngOnInit(): void {
   /* this.formulario.valueChanges.subscribe(value => {
      console.log(value);
    });*/
    //alert(this.esModificar);
  }

  submit(valorFormulario: any){
    var nombreAAgregar: string = this.formulario.get('nombre')?.value;
    var edadAAgregar: number = this.formulario.get('edad')?.value;
    var ocupacionAAgregar: string = this.formulario.get('ocupacion')?.value;
    var indice: number = this.indiceTabla;
    

    if(this.formulario.valid){
      if(this.esModificar){
        this.comp.editarElAlumno(nombreAAgregar,edadAAgregar,ocupacionAAgregar,indice);
        this.formulario.reset();
      }
      else{
        this.comp.agregarAlumno(nombreAAgregar,edadAAgregar,ocupacionAAgregar);
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


