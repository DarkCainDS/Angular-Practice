import { Pelicula } from '../models/pelicula';
import { Injectable } from "@angular/core";


@Injectable()
export class PeliculaService{
    public peliculas: Pelicula[];

    constructor(){
        this.peliculas = [
            new Pelicula("Princess Mononoke", 1997, "https://i.ytimg.com/vi/RKXsnbQt5M4/maxresdefault.jpg" ),
            new Pelicula("El viaje de Chihiro",2001 ,"https://m.media-amazon.com/images/I/71Nq-vqP0QL._SL1500_.jpg"),
            new Pelicula("Una noche en el fin del mundo", 2013,"https://www.3gb.com.mx/wp-content/uploads/2013/10/worldsend1.jpg" ),
            new Pelicula("FF ADvent CHildren", 2005, "https://as01.epimg.net/meristation/imagenes/2021/04/09/noticias/1617951798_123727_1617951958_sumario_normal.jpg" ),
      
          ]
    }






    HelloHackerman(){
        return 'Hola Hackerman desde un servicio Angular !!!';
    }
    getPeliculas(){
        return this.peliculas;
    }
}