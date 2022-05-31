import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'espar'
})
export class esParPipe implements PipeTransform{
    transform(value: any) {
        let espar = " no es par"
        if(value % 2 == 0){
            espar = "Es un número par";
        }
        return "El año es:" + value + " y" + espar;
        
    }
}