import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { FormsModule, NgModel, Validators } from '@angular/forms';
import { ServicioService } from '../servicio.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-panell',
  templateUrl: './panell.component.html',
  styleUrls:['./panell.component.css']


})
export class PanellComponent implements OnInit {

@Input() Panel = "resultat";
@Output() newEntradaEvent = new EventEmitter<string>();

addNewEntrada(value: string){
  this.newEntradaEvent.emit(value)
}

  //valors inicials de paginas i idiomas 
  paginas: number = 1;
  idiomas : number = 1;

  modificacionesWeb : number = 0;

  valor: number = 1;
  base: number = 1;
  numeroP: number = 1;
  numeroI: number = 1;
  showModal: any;
  showModal2: any;

  acumularPaginas (valor:number){
    if(this.numeroP >= 1){
      this.numeroP+=valor;
      this.ServicioService.modificacionesWebTotal+=30;
    }
  }

  acumularIdiomas (valor:number){
    if(this.numeroI >= 1){
      this.numeroI+=valor;
      this.ServicioService.modificacionesWebTotal+=30;
    }
  }

  restarPaginas (valor:number){
    if(this.numeroP >= 2){
      this.numeroP-=valor;
      this.ServicioService.modificacionesWebTotal-=30;
    } 
    //this.ServicioService.modificacionesWebTotal-=30;
  }

  restarIdiomas (valor:number){
    if(this.numeroI >= 2){
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
