import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BenvingudaComponent } from './benvinguda/benvinguda.component';
import { TornarComponent } from './tornar/tornar.component';

//Rutas de navegacion
const routes: Routes = [
  {path: '', redirectTo: 'benvinguda', pathMatch: 'full'},
  {path: 'home',component: HomeComponent},
  {path: 'benvinguda',component: BenvingudaComponent},
  {path: 'back',component: TornarComponent},
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
