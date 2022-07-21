import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, pipe, Subject } from 'rxjs';
import { Pelicula } from '../modelos/modelos';

@Injectable({
  providedIn: 'root'
})
export class ServicioDirectoresService {

  public peliculas$: Observable<Pelicula[]>;
  public peliculas: Subject<Pelicula[]>;

  constructor(private httpClient : HttpClient) {
    this.peliculas = new Subject;
    this.peliculas$ = this.peliculas.asObservable();
    this.httpClient.get(
      'https://swapi.dev/api/films'
    ).subscribe(respuesta => {
      this.peliculas.next((respuesta as any).results);
    })
  }

  

  
/*
  obtenerDirectores(): Observable<Directores[]>{
    return this.httpClient.get(this.directores).pipe(
      map((resp: any) => (resp.results as Directores[]))
    )
  }*/

}
