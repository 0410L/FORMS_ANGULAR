import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tornar',
  templateUrl: './tornar.component.html',
  styleUrls: ['./tornar.component.css']
})
export class TornarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navegarTornar(){
    this.router.navigate(['/benvinguda']);
  }


}
