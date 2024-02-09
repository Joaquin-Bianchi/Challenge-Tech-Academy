function generarNumeros() {
  for (let i = 0; i < 5; i++) {
    let numeroAleatorio = Math.floor(Math.random() * 100);
    if (numeroAleatorio % 2 === 0) {
      console.log(`El Número ${numeroAleatorio} es par`);
    } else {
      console.log(`El Número ${numeroAleatorio} es impar`);
    }
  }
}

generarNumeros();
