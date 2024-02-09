let numero = 2;

function calcularMultiplos() {
  for (let i = 1; i <= 100; i++) {
    if (i % numero === 0) {
      console.log(`${i}, es multiplo de, ${numero}`);
    }
  }
}

calcularMultiplos();
