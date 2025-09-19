import { persona } from "./persona.js";

export class socio extends persona {
  constructor(nombre, dni) {
    super(nombre, dni);
    this.libros = [];
  }
}
