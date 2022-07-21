import { Component, OnInit } from '@angular/core';
import { map, Subscription } from 'rxjs';
import { Pelicula } from 'src/app/modelos/modelos';
import { ServicioDirectoresService } from 'src/app/servicios/servicio-directores.service';

@Component({
  selector: 'app-lista-directores',
  templateUrl: './lista-directores.component.html',
  styleUrls: ['./lista-directores.component.css']
})
export class ListaDirectoresComponent implements OnInit {

  public peliculas: Pelicula[];
  private suscripcion: Subscription;
  public peliculasBkp: Pelicula[];

  columnas =[
    {titulo: "Titulo"},
    {titulo: "Numero de Episodio"},
    {titulo: "Director"},  
  ]
  
  constructor(public ServicioDirectores: ServicioDirectoresService) { }

  ngOnInit(): void {
    this.ServicioDirectores.peliculas$.subscribe(response => {
      this.peliculas = response;
      this.peliculasBkp = response;
      console.log("las pelis: " + this.peliculas)
    });
  }

  filtrarPorNombre(){
    let nombrePelicula = $('#nombreAlumno' as any).val();
    console.log("las pelis: " , this.peliculas)
    this.peliculas = this.peliculas.filter(pelicula => pelicula.title.indexOf(nombrePelicula) > -1)
  }

  recuperarLista(){
    this.peliculas = this.peliculasBkp;
  }
  mostrarPelicula = true;

  cambiarMostrarPelicula(entrada: boolean){
    this.mostrarPelicula = entrada;
  }

}
