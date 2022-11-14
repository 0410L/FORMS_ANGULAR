import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-panell',
  templateUrl: './panell.component.html',
  styleUrls:['./panell.component.css']


})
export class PanellComponent implements OnInit {

  //valors inicials de paginas i idiomas 
  paginas: number = 0;
  idiomas : number = 0;

  modificacionesWeb : number = 0;

  
  base: number = 0;
  numeroPaginas: number = 0;
  numeroIdiomas: number = 0;


  
  botonPaginas (valor:number){
    this.numeroPaginas+=valor;
    
  }

  botonIdiomas (valor:number){
    this.numeroIdiomas+=valor;
  }


  constructor(public ServicioService: ServicioService) { }

  /*
  calcTotalModWeb(paginas: number, idiomas: number) {
    this.modificacionesWeb = this.ServicioService.calcModWeb(paginas,idiomas);
    console.log(this.calcTotalModWeb)
  }*/

  // Carry per preparar acció
  // CarryOn per activar l'acció
  @Output()
  incloure = new EventEmitter<number>();
  incloureActiu() {
  this.incloure.emit(this.modificacionesWeb);
  /*console.log(this.carry)*/
  }

  ngOnInit(): void {
    
  }

}
