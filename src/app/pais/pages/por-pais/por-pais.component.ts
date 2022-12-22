import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent{

  termino: string = '';
  Error: boolean= false;
  paises : Country[] = [];
  constructor(private paisService: PaisService) { }

  buscar(){
    this.Error = false
    return this.paisService.buscarPais(this.termino).subscribe(
      (paises) => {
        return this.paises = paises
      }, (err) => {
     this.Error = true;
     this.paises = []
      });
  }


}
