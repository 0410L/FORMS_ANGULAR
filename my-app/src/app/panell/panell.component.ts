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

  valor: number = 0;
  base: number = 1;
  numeroP: number = 0;
  numeroI: number = 0;

  acumularPaginas (valor:number){
    this.numeroP+=valor;
    if(this.numeroP > 0){
    this.ServicioService.modificacionesWebTotal+=30;
    }
  }

  acumularIdiomas (valor:number){
    this.numeroI+=valor;
    if(this.numeroI > 0){
      this.ServicioService.modificacionesWebTotal+=30;
    }
  }

  restarPaginas (valor:number){
    if(this.numeroP > 0){
    this.numeroP-=valor;
    this.ServicioService.modificacionesWebTotal-=30;
    } 
    //this.ServicioService.modificacionesWebTotal-=30;
  }

  restarIdiomas (valor:number){
    if(this.numeroI > 0){
    this.numeroI-=valor;
    this.ServicioService.modificacionesWebTotal-=30;
    }
  }



  constructor(public ServicioService: ServicioService) { }


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
