let nombre = prompt("Ingrese su Nombre");
let apellido = prompt("Ingrese su Apellido");
console.log("Welcome" + " " + nombre + " " + apellido + " " + "to this page");
let fecha = prompt("Ingrese el año actual");
let nacimiento = prompt("Ingrese su año de Nacimiento");
let edad = fecha - nacimiento;
console.log("Tenes" + " " + edad + " " + "años");

if (edad >= 18) {
  console.log("Puedes continuar en la pagina");
} else {
  console.log("Usted es menor de edad, no puede continuar por acá");
}
alert("Bye" + " " + nombre + " " + apellido + " " + "volve pronto");
