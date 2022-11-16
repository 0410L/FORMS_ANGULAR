import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-tornar',
  templateUrl: './tornar.component.html',
  styleUrls: ['./tornar.component.css']
})
export class TornarComponent implements OnInit {
  location: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navegarTornar(): void{
    this.router.navigate(['/benvinguda']);
  }

  buida(){
    window.location.reload();
  }


}
