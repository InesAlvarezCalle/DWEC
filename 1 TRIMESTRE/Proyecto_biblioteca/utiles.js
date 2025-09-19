import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export function preguntar(pregunta) {
  return new Promise((resolve) =>
    rl.question(pregunta + " ", (r) => resolve(r.trim()))
  );
}

export function cerrar(){
  rl.close();
}