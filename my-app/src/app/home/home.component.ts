import { Component } from '@angular/core';
import { ServicioService } from '../servicio.service';
import { PanellComponent } from '../panell/panell.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent {

  paginaWebDespliega: boolean = false;
  precio: number = 0;
  precioTotal: number = 0;
  precioWeb: number = 0;
  pWebBool: boolean = false;
  seoBool: boolean = false;
  gAdsBool: boolean = false;



  constructor(public ServicioService: ServicioService) { }

  //contenedor calcul de pagina web
  pWebCbox(contenido:any):void {

    if (contenido.currentTarget.checked==false) this.precioWeb=0;

      contenido.currentTarget.checked ? this.paginaWebDespliega=true : this.paginaWebDespliega=false;
      contenido.currentTarget.checked ? this.pWebBool=true : this.pWebBool=false;

      this.precio = this.ServicioService.calcModWebTotal(this.pWebBool, this.seoBool, this.gAdsBool);
      this.precioTotal=this.precio+this.precioWeb;
  }


  //contenedor calcul de consultoria seo
  seoCbox(contenido:any):void {

    contenido.currentTarget.checked ? this.seoBool=true : this.seoBool=false;

    this.precio = this.ServicioService.calcModWebTotal(this.pWebBool, this.seoBool, this.gAdsBool);
    this.precioTotal=this.precio+this.precioWeb;
  }


  //contenedor calcul de campanya de Google Ads
  gAdsCbox(contenido:any):void {

    contenido.currentTarget.checked ? this.gAdsBool=true : this.gAdsBool=false;

    this.precio = this.ServicioService.calcModWebTotal(this.pWebBool, this.seoBool, this.gAdsBool);

    this.precioTotal=this.precio+this.precioWeb;
  }



  //contenedor de calcul de paginas i idiomes.
  precioWebTotal(contenido:any):void {
    this.precioWeb = contenido;
    this.precioTotal = this.precio+this.precioWeb;
  }



  /*
  acumular(checkBoxChecked: any) {

    if (checkBoxChecked.currentTarget.checked) {
      if (checkBoxChecked.target.defaultValue === "paginaWeb") {
        this.agregar = this.paginaWeb; this.paginaWebDespliega=true;
      }

      if (checkBoxChecked.target.defaultValue === "paginaWeb")  this.agregar = this.paginaWeb;
      else if (checkBoxChecked.target.defaultValue === "Seo") this.agregar = this.Seo;
      else this.agregar = this.googleAds;
      
      this.precio+=this.agregar; 
    }

    else {
        if (checkBoxChecked.target.defaultValue === "paginaWeb") {
          this.agregar = this.paginaWeb; this.paginaWebDespliega=false;
        }
        
        if (checkBoxChecked.target.defaultValue === "paginaWeb") this.agregar = this.paginaWeb;
        else if (checkBoxChecked.target.defaultValue === "Seo") this.agregar = this.Seo;
        else this.agregar = this.googleAds;
        
        this.precio-=this.agregar;
    }
    */ 

}