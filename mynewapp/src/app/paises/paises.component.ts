import { Component, OnInit } from '@angular/core';
import { Pais } from './pais';
import { dataPaises } from './datapaises';
import { PaisService } from './pais.service';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {

  paises: Pais[] = [];
  selected: boolean = false;
  selectedPais!: Pais;
  paisMasAntiguo: Pais | null = null;

  ngOnInit() {
    this.paises = dataPaises;
    this.calcularPaisMasAntiguo();
  }

  onSelected(pais: Pais): void {
    this.selectedPais = pais;
    this.selected = true;
  }

  calcularPaisMasAntiguo() {
    this.paisMasAntiguo = this.paises.reduce((min, p) => p.year_formacion < min.year_formacion ? p : min, this.paises[0]);
  }
}
