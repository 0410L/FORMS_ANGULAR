import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-benvinguda',
  templateUrl: './benvinguda.component.html',
  styleUrls: ['./benvinguda.component.css']
})
export class BenvingudaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navegar(){
    this.router.navigate(['/home']);
  }

}
