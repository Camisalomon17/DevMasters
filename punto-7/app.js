// Realizado por Nicolas 
// Ingresar 3 numeros y mostrar el mayor de ellos

let num1 = parseInt(prompt("Ingrese el primer número:"));
let num2 = parseInt(prompt("Ingrese el segundo número:"));
let num3 = parseInt(prompt("Ingrese el tercer número:"));

if (num1 > num2 && num1 > num3) {
    alert(num1 + " es el mayor");
} else if (num2 > num1 && num2 > num3) {
    alert(num2 + " es el mayor");
} else {
    alert(num3 + " es el mayor");
}