import { Injectable } from '@angular/core';
import { PanellComponent } from "./panell/panell.component";

@Injectable()

export class ServicioService {
  preuPaginaWeb: number = 500;
  preuSeo: number = 300;
  preuGoogleAds: number = 200;
  modificacionesWeb: number = 0;
  modificacionesWebTotal: number = 0;
  preuSeoBuit: number = 0;
  preuGoogleAdsBuit: number = 0;
  finalpresu: number = 0;
  PanellComponent: any;
 

  calcModWeb(paginas: number, idiomas: number){
    
    this.modificacionesWeb+=(paginas+idiomas)*30;

    console.log(this.modificacionesWeb)
    return this.modificacionesWeb;
  }

  
  calcModWebTotal(pWeb: boolean, seoW: boolean, gAds:boolean){

    let agregar: number = 0;
    pWeb ? agregar += this.preuPaginaWeb : this.modificacionesWebTotal =0;
    seoW ? agregar += this.preuSeo : this.preuSeo +=0;
    gAds ? agregar += this.preuGoogleAds : this.preuGoogleAds +=0;

    //this.modificacionesWebTotal ? agregar = this.modificacionesWeb : agregar;

    this.modificacionesWeb = agregar;
    /*this.modificacionesWebTotal = agregar;*/
    /*console.log(this.calcModWebTotal)*/
    return this.modificacionesWebTotal;
  
  }

  calcTotalModWeb(paginas: number, idiomas: number) {
    this.modificacionesWeb = this.calcModWeb(paginas,idiomas);
    console.log(this.modificacionesWeb)
  }

  presupuestoTotal(){
    return this.modificacionesWeb  + this.modificacionesWebTotal;
  }

  demo(){
    //this.modificacionesWebTotal = this.PanellComponent.numeroP
  }

  
}
