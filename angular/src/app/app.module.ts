import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { EditarComponent } from './components/editar/editar.component';
import { ListarComponent } from './components/listar/listar.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    EditarComponent,
    ListarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
