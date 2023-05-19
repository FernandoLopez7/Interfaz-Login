import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importar FormsModule


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginComponent } from './login/login.component';

//UI
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { ListarCComponent } from './listarcc/listarcc.component';

import { MatListModule } from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

//Para consumir Apis
import { HttpClientModule } from '@angular/common/http';
import { EditarCentroCostoComponent } from './editar-centro-costo/editar-centro-costo.component';
import { NuevoCentroCostoComponent } from './nuevo-centro-costo/nuevo-centro-costo.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';


// Los iconos por defecto de SweetAlert2 son los siguientes: error, warning, success y question

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListarCComponent,
    EditarCentroCostoComponent,
    NuevoCentroCostoComponent,
    NavBarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule ,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,

    HttpClientModule ,
    MatListModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
  ],
  bootstrap: [AppComponent],
  exports: [
    
    ]
})
export class AppModule { }
