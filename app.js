let passwordDefault = "july005";
let password;
let saldoDisponible = 2500;
let monto;
let operacion;

let nombre = prompt("Ingrese su nombre");

password = prompt("Ingrese contraseña");

function mostrarSaldo() {
  alert(`Su saldo es $${saldoDisponible}`);
}
function transferencia(montoAtransferir) {
  saldoDisponible = saldoDisponible - montoAtransferir;
}

function deposito(montoAdepositar) {
  saldoDisponible = saldoDisponible + montoAdepositar;
}

if (password == passwordDefault) {
  alert(`Bienvenid/o ${nombre} su saldo es $${saldoDisponible}`);
  operacion = Number(
    prompt(
      "Si usted desea realizar una operacion, siga los siguiente pasos: 1 Si usted desea realizar una transferencia. 2 Si desea depositar "
    )
  );

  switch (operacion) {
    case 1:
      alert("Usted desea transferir ");
      monto = Number(prompt("¿Que monto desea transferir ?"));
      transferencia(monto);
      mostrarSaldo();

      break;
    case 2:
      alert("Usted desea depositar");
      monto = Number(prompt("¿Que monto desea depositar?"));
      deposito(monto);
      mostrarSaldo();
      break;
    default:
      alert("Usted no desea realizar una operacion hoy");
  }
} else {
  alert(`Contraseña incorrecta, comuniquese para reestablecer contraseña`);
}
