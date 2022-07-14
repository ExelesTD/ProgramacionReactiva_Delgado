import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormularioComponent } from '../formulario/formulario.component';

@Component({
  selector: 'app-componente-content',
  templateUrl: './componente-content.component.html',
  styleUrls: ['./componente-content.component.css']
})
export class ComponenteContentComponent implements OnInit {

  public resultadoModal: String;
  

  constructor(public dialog: MatDialog) { }

  public openDialog(){
    const dialogRef = this.dialog.open(FormularioComponent,{
      width: '250px',
      data: 'Titulo del Modal',
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.resultadoModal = result;
    });
  }

  ngOnInit(): void {
  }

}
