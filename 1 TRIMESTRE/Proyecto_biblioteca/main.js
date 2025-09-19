import { resolve } from "path";
import { biblioteca } from "./biblioteca.js";
import { preguntar, cerrar } from "./utiles.js";

async function menu() {
  let salir = false;

  while (!salir) {
    console.log(`
        MENÚ
        
        1. Agrega un libro
        2. Agrega una película
        3. Agrega una revista
        4. Agrega un socio
        5. Agrega un administrador
        6. Prestar un recurs
        7. Devuelve un libro
        8. Lista de recursos
        9. Lista de socios
        10. Lista de administradores
        11. Lista recursos prestats
        0. SALIR
    `);
    let respuesta = await preguntar("¿Que desea hacer? ");

    switch (respuesta) {
      case "0":
        salir =  true;
        cerrar();
        break;

      case "1":
        await libreria.agregarLibro();
        break;
        
      case "2":
        await libreria.agregarPelicula();
        break;
      case "3":
        await libreria.agregarRevista();
        break;
      case "4":
        await libreria.agregarSocio();
        break;
      case "5":
        await libreria.agregarAdministrador();
        break;
      case "6":
        await libreria.prestarProductos();
        break;
      case "7":
        await libreria.devuelveLibro();
        break;
      case "8":
        await libreria.listarRecursos();
        break;
      case "9":
        await libreria.listarSocios();
        break;
      case "10":
        await libreria.listarAdministradores();
        break;
      case "11":
        await libreria.listarRecursosPrestats();
        break;
      default:
        console.log("Ese número no está en el menú");
        break;
    }
  }
}

const libreria = new biblioteca();
menu();