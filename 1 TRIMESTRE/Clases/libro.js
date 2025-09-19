import { material } from "./material.js";

export class libro extends material {
  constructor(titulo, numDisponible, autor) {
    super(titulo, numDisponible);
    this.autor = autor;
  }
}
