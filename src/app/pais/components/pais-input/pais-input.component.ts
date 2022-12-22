import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';
import { Observable, observable } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent implements OnInit {

  termino: string = '';
  paises: Country[] = [];
  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  buscar(){



  }

}
