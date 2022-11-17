import { Component, Input } from '@angular/core';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {

  @Input() agregarCompra: any[] = [];


}
