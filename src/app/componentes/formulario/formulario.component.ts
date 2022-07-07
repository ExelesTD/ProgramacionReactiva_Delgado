import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ComponenteListaComponent } from '../componente-lista/componente-lista.component';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  public formulario: FormGroup;


  constructor(
      private fb: FormBuilder,
      private comp: ComponenteListaComponent
    ){      
      this.formulario = this.fb.group({
          nombre: [null,[Validators.required]],
          edad: [null,[Validators.required,Validators.max(99)]],
          ocupacion: [null,[Validators.required]]
      });
   }



  ngOnInit(): void {
   /* this.formulario.valueChanges.subscribe(value => {
      console.log(value);
    });*/
  }

  submit(valorFormulario: any){
    var nombreAAgregar: string = this.formulario.get('nombre')?.value;
    var edadAAgregar: number = this.formulario.get('edad')?.value;
    var ocupacionAAgregar: string = this.formulario.get('ocupacion')?.value;


    if(this.formulario.valid){
      this.comp.mostrarMensaje(nombreAAgregar,edadAAgregar,ocupacionAAgregar);
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
  
  get nombre() { return this.formulario.get('nombre');}

}
