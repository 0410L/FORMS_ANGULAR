import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panell',
  templateUrl: './panell.component.html',

  template: `
  <p></p>
  <div class="desplegablePanel m-1 border border-info">
    <div class="row">
        <div class="col aling-text">
            <label for="NumPagLabel" class="col-form-label">Número de páginas</label>
        <div>
       
        <div class="col aling-text">
            <input type="number" id="NumPagLabel" class="form-control">
        <div>
        
    </div>

    <div class="row">
        <div class="col aling-text">
            <label for="NumIdiomLabel" class="col-form-label">Número de idiomas</label>
        <div>
       
        <div class="col aling-text">
            <input type="number" id="NumIdiomLabel" class="form-control">
        <div>
            
    </div>
  </div>
  `

})
export class PanellComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
