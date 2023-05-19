import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';


//para hacer llamadas a la api
import { HttpClient } from '@angular/common/http';

//Para variables de entorno
import { environment } from '../../../environments/environments';
const apiUrl = environment.API_URL;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  respuestaApi: any;

  emisores: any;

  constructor(private router: Router, private http: HttpClient) { };
  
  emisorSeleccionado: any;

  onEmisorSeleccionado() {
    console.log("emisorSeleccionado: ",this.emisorSeleccionado);
    // aquí puedes hacer lo que necesites con el valor seleccionado
  }

  ngOnInit(): void {
    console.log("apiUrl: ", apiUrl);
    this.http.get(`${apiUrl}/Emisores`).subscribe(response => {
      
      this.emisores = response;

      console.log("Emisores: ", this.emisores);
    });
  }

  async onSubmit() {

    //Si aún no ha seleccionado una sucursal
    if(this.emisorSeleccionado == ""){
      console.log("Se debe seleccionar una sucursal");
      return;
    }



    // Lógica para procesar el formulario de login
    // Puedes usar this.username y this.password para acceder a los valores del formulario
    console.log('Usuario:', this.username);
    console.log('Contraseña:', this.password);
    console.log("A Home");

    const url = `${apiUrl}?usuario=` + this.username + '&password=' + this.password;
   
    this.http.get(url).subscribe(async (response) => {

      this.respuestaApi = response;
      // Guardar la respuesta en una variable para su posterior uso
      this.respuestaApi = this.respuestaApi[0];

      //Comparar si las sucursales son iguales
      if(this.emisorSeleccionado.Codigo != this.respuestaApi.COMPANIA){
        console.log("El código de la sucursal no coincide. Emisor seleccionado: ", this.emisorSeleccionado.Codigo, ", la compania es: ", this.respuestaApi.COMPANIA);
        return;
      }

      if(this.respuestaApi == null){
        this.router.navigate(['/login']);
        return;
      }

      if(this.respuestaApi.OBSERVACION == "INGRESO EXITOSO"){
        this.router.navigate(['/home']);
      }
      
    });

  }

}