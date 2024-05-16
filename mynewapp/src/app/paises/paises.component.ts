import { Component, OnInit } from '@angular/core';
import { Pais } from './pais';
import { dataPaises } from './datapaises';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {


  paises: Array<Pais> = [];

  constructor() { }
  getPaisesList() : Array<Pais> {
    return dataPaises;
  }

  ngOnInit() {
    this.paises = this.getPaisesList();
  }

}
