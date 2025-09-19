import { persona } from "./persona.js";

export class administrador extends persona {
  constructor(nombre, dni, cargo) {
    if (cargo != "Administrador" && cargo != "Ayudante") {
      throw new Error("El cargo solo puede ser: Administrador y Ayudante");
    } else {
      super(nombre, dni);
      this.cargo = cargo;
      console.log("¡Administrador introducido con éxito!");
    }
  }
}