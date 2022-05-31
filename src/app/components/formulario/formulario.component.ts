import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  public user:any;
  public campo:string;

  constructor() {
    this.user = {
      nombre: '',
      apellidos:'',
      bio:'',
      genero:''
    }
    this.campo=""
   }

  ngOnInit(): void {
  }
  onSubmit(){
    alert("FOrmulario enviado");
    console.log(this.user);

  }
  hasDadoClick(){
    alert("Has dado Click !!!")
  }
  hasSalido(){
  alert("Has dado a enter")
}
}
