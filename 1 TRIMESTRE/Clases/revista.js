import { material } from "./material.js";

export class revista extends material {
  constructor(titulo, numDisponible, dataPublicacion) {
    super(titulo, numDisponible);
    this.dataPublicacion = dataPublicacion;
  }
}
