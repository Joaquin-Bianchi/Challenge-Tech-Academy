let texto = "www.techacademy.com";
let textoDividido = texto.split(/\.(.+)/);
console.log(textoDividido);
let resultado = textoDividido[0].toUpperCase();

if (textoDividido[1]) {
  resultado += "." + textoDividido[1].toLowerCase();
}

console.log("texto:", texto);
console.log("Salida:", resultado);
