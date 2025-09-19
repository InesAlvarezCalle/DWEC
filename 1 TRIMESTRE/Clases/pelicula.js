import { material } from "./material.js";

export class pelicula extends material {
  constructor(titulo, numDisponible, director, genero) {
    super(titulo, numDisponible);
    this.director = director;
    this.genero = genero;
  }
}
