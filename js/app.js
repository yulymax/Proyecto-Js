let passwordDefault = "july005";
let saldoDisponible = 2500;
//Aplique Dom aca
function mostrarSaldo(saldo) {
  alert(`Su saldo es $${saldo}`);
  let saldoCuentaDom = document.getElementById("saldo-cuenta");
  saldoCuentaDom.innerHTML = saldo;
}

function transferencia(montoAtransferir) {
  saldoDisponible = saldoDisponible - montoAtransferir;
}

function deposito(montoAdepositar) {
  saldoDisponible = saldoDisponible + montoAdepositar;
}

function mostrarOperaciones(operacion) {
  let monto;
  switch (operacion) {
    case 1:
      alert("Usted desea transferir ");
      monto = Number(prompt("¿Que monto desea transferir ?"));
      transferencia(monto);
      mostrarSaldo(saldoDisponible);

      break;
    case 2:
      alert("Usted desea depositar");
      monto = Number(prompt("¿Que monto desea depositar?"));
      deposito(monto);
      mostrarSaldo(saldoDisponible);
      break;
    default:
      alert("Usted no desea realizar una operacion hoy");
  }
}

let dni = prompt("Ingrese su dni");
let clave = prompt("Ingrese su clave");
loginUsuario(dni, clave);
