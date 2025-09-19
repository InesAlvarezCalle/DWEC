import { administrador } from "../Clases/administrador.js";
import { socio } from "../Clases/socio.js";
import { persona } from "../Clases/persona.js";
import { material } from "../Clases/material.js";
import { libro } from "../Clases/libro.js";
import { pelicula } from "../Clases/pelicula.js";
import { revista } from "../Clases/revista.js";
import { preguntar } from "./utiles.js";

export class biblioteca {
  materiales = [];
  personas = [];

  async agregarLibro() {
    let lib = new libro(
      await preguntar("Titulo: "),
      await preguntar("Nº Disponibles: "),
      await preguntar("Autor: ")
    );
    this.materiales.push(lib);
    console.log("¡Libro introducido con éxito!");
  }

  async agregarPelicula() {
    let pel = new pelicula(
      await preguntar("Titulo: "),
      await preguntar("Nº Disponibles: "),
      await preguntar("Director: "),
      await preguntar("Genero: ")
    );
    this.materiales.push(pel);
    console.log("¡Película introducida con éxito!");
  }

  async agregarRevista() {
    let rev = new revista(
      await preguntar("Titulo: "),
      await preguntar("Nº Disponibles: "),
      await preguntar("Data publicació: ")
    );
    this.materiales.push(rev);
    console.log("¡Revista introducida con éxito!");
  }

  async agregarSocio() {
    let soc = new socio(await preguntar("Nombre: "), await preguntar("DNI: "));
    this.personas.push(soc);
    console.log("¡Socio introducido con éxito!");
  }

  async agregarAdministrador() {
    let opcion;
    do {
      console.log("1. Administrador");
      console.log("2. Ayudante");
      opcion = await preguntar("Cargo: ");
    } while (opcion < 1 || opcion > 2);

    if (opcion == 1) {
      opcion = "Administrador";
    } else if (opcion == 2) {
      opcion = "Ayudante";
    } else {
      console.log("Ese número no está en la lista");
    }

    let adm = new administrador(
      await preguntar("Nombre: "),
      await preguntar("DNI: "),
      opcion
    );
    this.personas.push(adm);
  }

  async prestarProductos() {
    let dni = await preguntar("Introduce el DNI del socio: ");
    let socio = this.personas.find((x) => x.dni == dni);

    if (!socio) {
      console.log("No hemos encontrado a ningún socio con ese DNI.");
      return;
    } else if (socio.libros.length > 3) {
      console.log("Se ha excedido el número de prestamos.");
      return;
    }

    let titulo = await preguntar("Introduce el título del recurso: ");
    let recurso = this.materiales.find((x) => x.titulo == titulo);

    if (!recurso) {
      console.log("No hemos encontrado ningún recurso con ese título.");
      return;
    } else if (recurso.numDisponible <= 0) {
      console.log("No hay ejemplares disponibles.");
      return;
    }

    recurso.numDisponible--;
    socio.libros.push(recurso);
  }

  async devuelveLibro() {
    let dni = await preguntar("Introduce el DNI del socio: ");
    let socio = this.personas.find((x) => x.dni == dni);

    if (!socio) {
      console.log("No hemos encontrado a ningún socio con ese DNI.");
      return;
    } else if (socio.libros.length > 3) {
      console.log("Se ha excedido el número de prestamos.");
      return;
    }

    for (let i = 0; i < socio.libros.length; i++) {
      console.log("Título: " + socio.libros[i].titulo);
    }

    let titulo = await preguntar("Introduzca el título del libro a eliminar: ");
    let index = socio.libros.findIndex((libro) => libro.titulo === titulo);

    if (index === -1) {
      console.log("El socio no tiene ningún libro con ese título.");
    } else {
      let libro = socio.libros[index];
      libro.numDisponible++;
    }

    socio.libros.splice(index, 1);
    console.log("¡El recurso se ha eliminado correctamente!");
  }

  async listarRecursos(){
     console.log("LISTA DE RECURSOS");
     for(let recurso of this.materiales){
        console.log(`Recurso: ${recurso.titulo}`);
     }
  }

  async listarSocios(){
    console.log("LISTA DE SOCIOS");
    for(let persona of this.personas){
      if(persona instanceof socio){
        console.log(`Nombre: ${persona.nombre}, DNI: ${persona.dni}`);
      }
    }
  }

  async listarAdministradores(){
    console.log("LISTA DE ADMINISTRADORES");
    for(let persona of this.personas){
      if(persona instanceof administrador){
        console.log(`Nombre: ${persona.nombre}, DNI: ${persona.dni}`);
      }
    }
  }

  async listarRecursosPrestats(){
    console.log("LISTA DE RECURSOS PRESTADOS");
    let socios = this.personas.filter(x => x instanceof socio);

    if (socios.length === 0) {
      console.log("No hay socios registrados.");
      return;
    }

    for(let socio of socios){
      console.log(`Nombre: ${socio.nombre}, DNI: ${socio.dni}`);
      if(!socio.libros || socio.libros.length === 0){
        console.log("El socio no tiene recursos prestados.");
      } else {
        for(let recurso of socio.libros){
          console.log(` -> ${recurso.titulo}`);
        }
      }
    }
  }
}