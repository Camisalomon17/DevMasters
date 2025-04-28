// Autor: Sergio Ghezzi
let numero1 = parseFloat(prompt("ÇIngrese el primer numero"))
let numero2 = parseFloat(prompt("Ingrese el segundo numero"))
if (numero1 > numero2) {
    alert("El primer número (" + numero1 + ") es mayor que el segundo (" + numero2 + ").");
} else if (numero2 > numero1) {
    alert("El segundo número (" + numero2 + ") es mayor que el primero (" + numero1 + ").");
} else {
    alert("Ambos números son iguales.");
}