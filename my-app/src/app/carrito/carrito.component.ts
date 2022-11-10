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


  //contingut del html, titol y selectors de compra
  template: `
  <p></p>
  <h5>¿Que vols fer?</h5>
  <div class="container-fluid bg-info bg-opacity-25">
    <p></p>
    <div class="form-check">
      <input type="checkbox" (click)="acumular($event)" value="paginaWeb" class= form-check-input>
      <label class="form-check-label">una pàgina web (500€)</label>
    </div>
    <p></p>
    <div class="form-check">
      <input type="checkbox" (click)="acumular($event)" value="seo" class= form-check-input>
      <label class="form-check-label">una consultoria SEO (300€)</label>
    </div>
    <p></p>
    <div class="form-check">
      <input type="checkbox" (click)="acumular($event)" value="googleAds" class= form-check-input>
      <label class="form-check-label">una campanya de Google Ads (200€)</label>
    </div>
    <p></p>
    <p></p>
    <h5>Preu: <strong>{{precio}}</strong></h5>
    <p></p>
  </div>
  `
})



//contiguts del carrito
export class CarritoComponent implements OnInit {


  precio: number = 0;
  agregar: number = 0;


  acumular(event: any): void {
    let optionChecked: boolean = event.currentTarget.checked;

    for (let service in this.services) {
      if (
        optionChecked &&
        event.target.defaultValue === this.services[service].nombre
      ) {
        this.agregar = this.agregar + this.services[service].price;
      } else if (
        optionChecked === false &&
        event.target.defaultValue === this.services[service].nombre
      ) {
        this.agregar = this.agregar - this.services[service].price;
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
