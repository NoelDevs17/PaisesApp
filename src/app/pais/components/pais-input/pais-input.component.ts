import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';
import { Observable, Subject, observable } from 'rxjs';
import {  debounceTime } from 'rxjs/operators';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent implements OnInit {

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  @Input() placeholder: string = '';
  debouncer: Subject<string> = new Subject();


  termino: string = '';
  paises: Country[] = [];


  constructor(private paisService: PaisService) { }
  ngOnInit() {
    this.debouncer.pipe(
      debounceTime(300)
    ).subscribe(valor => {
      this.onDebounce.emit(valor);

    })
  }

  buscar(){
    this.onEnter.emit(this.termino)
  }

  teclaPresionada(event: any){
    this.debouncer.next(this.termino);

  }

}
