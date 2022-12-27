import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html'
})
export class PorPaisComponent{

@Input()capital:Country[]=[]

  termino: string = '';
  Error: boolean= false;
  paises : Country[] = [];
  constructor(private paisService: PaisService) { }

  buscar(termino: string){
    this.Error = false
    this.termino = termino;


     this.paisService.buscarPais(this.termino).subscribe(
      (paises) => {
        return this.paises = paises
      }, (err) => {
     this.Error = true;
     this.paises = []
      });
  }
  sugerencias(termino: string ){
    this.Error = false;
    //TODO-Crear sugerencias
  }
}
