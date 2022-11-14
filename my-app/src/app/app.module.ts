import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { PanellComponent } from './panell/panell.component';
import { ServicioService } from './servicio.service';
import { AppRoutingModule } from './app-routing.module';
import { BenvingudaComponent } from './benvinguda/benvinguda.component';
import { TornarComponent } from './tornar/tornar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PanellComponent,
    BenvingudaComponent,
    TornarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [
    ServicioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
