import { Component } from '@angular/core';

@Component({
    selector: 'firstComponent',
    templateUrl: './firstComponente.component.html'
})
export class miComponente{

    public titulo: string;
    public comentario: string;
    public year: number;
    public mostrarPelicula:boolean;

    constructor(){
        this.titulo = "HOla Mundo Soy mi componente";
        this.comentario = "Este es el primer componente";
        this.year = 2022;
        this.mostrarPelicula = true;

        console.log("componente firstComponente Cargado !! ");
        console.log(this.titulo,this.comentario,this.year);
    }
    ocultarPelicula(){
        this.mostrarPelicula = false;
    }
}