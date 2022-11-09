import { Component} from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent {
  numero: number = 0;
  base: number = 5;

  /*
  sumar() {
    this.numero+=1;
  }

  restar() {
    this.numero-=1;
  }
  */

  acumular (valor:number){
    this.numero+=valor;
  }

}
