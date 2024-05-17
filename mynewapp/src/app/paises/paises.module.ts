import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaisesComponent } from './paises.component';
import { PaisDetailComponent } from './pais-detail/pais-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PaisesComponent, PaisDetailComponent],
  exports: [PaisesComponent]
  
})
export class PaisesModule { }
