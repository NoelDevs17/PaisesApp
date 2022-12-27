import { Component, Input, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html'
})
export class PorCapitalComponent  {



  termino: string = '';
  Error: boolean= false;
  paises : Country[] = [];
  constructor(private paisService: PaisService) { }

  buscar(termino: string){
    this.Error = false
    this.termino = termino;
     this.paisService.buscarCapital(termino).subscribe(
      (paises) => {
        console.log(this.paises, 'Noel ');
        return this.paises = paises
      }, (err) => {
     this.Error = true;
     this.paises = []
      });
  }


}
