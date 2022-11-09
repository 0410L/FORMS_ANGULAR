import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrito',
  styleUrls: ['./carrito.component.css'],

  template: `
  <p></p>
  <div class="container">
    <h5>¿Que vols fer?</h5>
    <p></p>
    <div class="form-check">
      <input type="checkbox" (click)="acumular(300)" class= form-check-input>
      <label class="form-check-label">una pàgina web (500€)</label>
    </div>
    <p></p>
    <div class="form-check">
      <input type="checkbox" (click)="acumular(300)" class= form-check-input>
      <label class="form-check-label">una consultoria SEO (300€)</label>
    </div>
    <p></p>
    <div class="form-check">
      <input type="checkbox" (click)="acumular(200)" class= form-check-input>
      <label class="form-check-label">una campanya de Google Ads (200€)</label>
    </div>
    <p></p>
    <p></p>
    <h5>Preu: <strong>{{numero}}</strong></h5>
    <p></p>
  </div>
  `
})
export class CarritoComponent implements OnInit {
  numero: number = 0;

  acumular (valor:number){
    this.numero+=valor;
  }

  isAccepted:string[]=[];


  constructor() { }
  ngOnInit(): void {
  }

}