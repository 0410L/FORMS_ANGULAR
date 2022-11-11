import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-carrito',
  styleUrls: ['./carrito.component.css'],
  templateUrl: './carrito.component.html',

})


//contiguts del carrito
export class CarritoComponent implements OnInit {


  paginaWebDespliega: boolean = false;
  precio: number = 0;
  agregar: number = 0;
  paginaWeb = 500;
  Seo = 300;
  googleAds = 200;


  /*
  services: servei []=[
    {nombre:'paginaWeb', import: 500, id: 1},
    {nombre:'Seo', import: 300, id: 2},
    {nombre:'googleAds', import: 200, id: 3},
  ]
  */

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

  }

  constructor() { }
  ngOnInit(): void {
  }

}
