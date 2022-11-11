import { Component, OnInit } from '@angular/core';

//services
interface servei {
  nombre: string;
  price: number;
  id: number;
}


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


  acumular(event: any): void {
    let optionChecked: boolean = event.currentTarget.checked;

    for (let service in this.services) {
      if (optionChecked && event.target.defaultValue === this.services[service].nombre) {
        this.agregar = this.agregar + this.services[service].price; this.paginaWebDespliega=true;
      } 

      else if (optionChecked === false && event.target.defaultValue === this.services[service].nombre) {
        this.agregar = this.agregar - this.services[service].price; this.paginaWebDespliega=false;
      }
    }

    this.precio = this.agregar;
    console.log (this.services)
  }


  services: servei []=[
    {nombre:'paginaWeb', price: 500, id: 1},
    {nombre:'seo', price: 300, id: 2},
    {nombre:'googleAds', price: 200, id: 3},
  ]

  constructor() { }
  ngOnInit(): void {
  }

}
