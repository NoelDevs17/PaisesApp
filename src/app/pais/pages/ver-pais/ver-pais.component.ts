import { PaisService } from './../../services/pais.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { countReset } from 'console';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/pais.interface';


@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {

  pais!: Country;


  constructor(private activatedRoute: ActivatedRoute, private paisService: PaisService ) { }

  ngOnInit(): void {

    this.activatedRoute.params.pipe(
      switchMap
      (({id}) => this.paisService.verPais(id ) ), tap(console.log)
    ).subscribe(pais => this.pais = pais);
    };


    // this.activatedRoute.params.subscribe(({id}) =>{
    //   console.log('Noel params', id);

    //   this.paisService.verPais(id).subscribe(pais =>{
    //     console.log(pais);

    //   })

    // })
  }


