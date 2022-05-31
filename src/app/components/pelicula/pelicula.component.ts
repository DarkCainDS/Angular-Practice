import { Pelicula } from './../../models/pelicula';
import { Component, OnInit } from '@angular/core';
import { Input , Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  @Input() pelicula!: Pelicula;
  @Output() marcarFavorita = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  selecionar(event:any,pelicula:any){
    this.marcarFavorita.emit({
      pelicula: pelicula
    });
  }

}
