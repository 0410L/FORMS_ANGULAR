import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormsModule, NgModel, Validators } from '@angular/forms';
import { ServicioService } from '../servicio.service';
import { FormControl } from '@angular/forms';

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

  
  baseP: number = 1;
  baseI: number = 1;
  numeroP: number = 0;
  numeroI: number = 0;

  acumularPaginas (valor:number){
    this.numeroP+=valor;
    this.ServicioService.modificacionesWeb+=30;
  }

  acumularIdiomas (valor:number){
    this.numeroI+=valor;
    this.ServicioService.modificacionesWeb+=30;
  }

  restarPaginas (valor:number){
    this.numeroP+=valor;
    this.ServicioService.modificacionesWeb-=30;
  }

  restarIdiomas (valor:number){
    this.numeroI+=valor;
    this.ServicioService.modificacionesWeb-=30;
  }





  /*
  botonSumaPaginas (){
    this.ServicioService.modificacionesWeb+=30;
    }

  botonRestaPaginas (){
    this.ServicioService.modificacionesWeb-=30;
  }

  botonSumaIdiomas (){
    this.ServicioService.modificacionesWeb+=30;
  }

  botonRestaIdiomas (){
    this.ServicioService.modificacionesWeb-=30;
  }
*/

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
