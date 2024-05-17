export class Pais {
id: number;
nombre: string;
year_formacion: number;
lenguaje: string;
capital: string;
descripcion: string;
bandera: string;



 public constructor(id: number, nombre: string, year_formacion: number, lenguaje: string, capital: string, descripcion: string, bandera: string) {
    this.id = id;
    this.nombre = nombre;
    this.year_formacion = year_formacion;
    this.lenguaje = lenguaje;
    this.capital = capital;
    this.descripcion = descripcion;
    this.bandera = bandera;
  }
}
