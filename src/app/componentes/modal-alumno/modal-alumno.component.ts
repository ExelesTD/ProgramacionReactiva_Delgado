import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-modal-alumno',
  templateUrl: './modal-alumno.component.html',
  styleUrls: ['./modal-alumno.component.css']
})
export class ModalAlumnoComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ModalAlumnoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
