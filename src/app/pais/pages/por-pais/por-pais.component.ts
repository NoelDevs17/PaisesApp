import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent{

  termino: string = '';
  Error: boolean= false;
  constructor(private paisService: PaisService) { }

  buscar(){
    this.Error = false
    return this.paisService.buscarPais(this.termino).subscribe(
      (resp) => {
        console.log(resp);

      }, (err) => {
     this.Error = true;
      });
  }

}
