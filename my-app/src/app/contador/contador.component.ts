import { Component} from '@angular/core';

@Component({
  selector: 'app-contador',
  styleUrls: ['./contador.component.css'],

  template: `
  <p></p>
  <h1>Contador</h1>
  <h5>La base es:<strong>{{base}}</strong></h5>
  <button (click)="acumular(base)">+5</button>
  <span>{{numero}}</span>
  <button (click)="acumular(-base)">-5</button>
  <p></p>
  <h5>Resultado total:<strong>{{numero}}</strong></h5>
  <p></p>
  `
})
export class ContadorComponent {
  numero: number = 0;
  base: number = 5;

  acumular (valor:number){
    this.numero+=valor;
  }

  /*
  sumar() {
    this.numero+=1;
  }

  restar() {
    this.numero-=1;
  }
  */

}
