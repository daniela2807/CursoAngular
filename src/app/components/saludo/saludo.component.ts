import { Component,OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit{

  @Input () nombre:string="Martin";

  constructor(){}


  ngOnInit(): void {
    console.log("ngOninit al componente saludo ")
    //Instrucciones previas a la renderizción del componente
  }



}
