import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Pelicula } from '../../models/pelicula';
import { PeliculaService } from 'src/app/services/pelicula.service';
@Component({
  selector: 'peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
  providers: [PeliculaService]
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy{
  public titulo:string;
  public peliculas:Pelicula[];
  public favorita!: Pelicula;
  public fecha: any;

  constructor(
    private _peliculaService: PeliculaService
  ){ 
    this.titulo = "componente peliculas";
    this.peliculas = this._peliculaService.getPeliculas();
    this.fecha = new Date(2022,4,29)
    console.log("Constructor Lanzado !!");
  }

  ngOnInit(): void {
    console.log(this.peliculas);
    console.log("Componente Iniciado");
    console.log(this._peliculaService.HelloHackerman());
  }

  ngDoCheck(): void {
    console.log("Docheck Lanzado");
  }
  cambiarTitulo(){
    this.titulo = "El titulo a sido cambiado";
  }
  ngOnDestroy(): void {
    console.log("El componente se va a eliminar de la ejecucion")
  }
  mostrarFavorita(event:any){
    //alert(event);
    this.favorita = event.pelicula;
    console.log(event);
  }
}
