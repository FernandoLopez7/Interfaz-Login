import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

//para hacer llamadas a la api
import { HttpClient } from '@angular/common/http';

//Para variables de entorno
import { environment } from '../../../environments/environments';
const apiUrl = environment.API_URL;

interface CentroDeCosto {
  Codigo: string;
  NombreCentroCostos: string;
  // Otros atributos...
}

@Component({
  selector: 'app-editar-centro-costo',
  templateUrl: './editar-centro-costo.component.html',
  styleUrls: ['./editar-centro-costo.component.css']
})
export class EditarCentroCostoComponent {

  element = { Codigo: "", NombreCentroCostos: "" };

  constructor(private http: HttpClient, private router: ActivatedRoute, private route: Router) { }
  ngOnInit(): void {

    const codigo = this.router.snapshot.paramMap.get('codigo');
    const nombreCC = this.router.snapshot.paramMap.get('nombreCC');

    this.element.Codigo = codigo ? codigo : "";
    this.element.NombreCentroCostos = nombreCC ? nombreCC : "";

    console.log("element: ", this.element);
    //this.element = this.router.snapshot.root.firstChild?.params['element'];

  }

  editar() {
    console.log("element: ", this.element);

    try {

      console.log("element.DescripcionCentroCostos: ", this.element.NombreCentroCostos, " | element.Codigo: ", this.element.Codigo);
      const url = `${apiUrl}/UpdateCentroDeCosto?codigoCentroCostos=${this.element.Codigo}&descripcioncentrocostos=${this.element.NombreCentroCostos}`;
      
      this.http.get<CentroDeCosto[]>(url).subscribe(async (response) => {

        console.log("response: ", response[0]);
        if (response[0].NombreCentroCostos == "Actualizacíón Correcta") {

          alert("El centro de costos se actualizó correctamente");
          //Redirecciona a home
          this.route.navigate(['/home']);

        } else {
          alert("El centro de costos no se actualizó correctamente");
        }

      })
    }
    catch (error) {
      console.log("error:", error);
    }
  }
}
