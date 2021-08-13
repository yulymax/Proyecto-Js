let passwordDefault = "july005";
let saldoDisponible = 2500;

function mostrarSaldo() {
  alert(`Su saldo es $${saldoDisponible}`);
}

function transferencia(montoAtransferir) {
  saldoDisponible = saldoDisponible - montoAtransferir;
}

function deposito(montoAdepositar) {
  saldoDisponible = saldoDisponible + montoAdepositar;
}

function mostrarOperaciones() {
  let operacion = Number(
    prompt(
      "Si usted desea realizar una operacion, siga los siguiente pasos: 1 Si usted desea realizar una transferencia. 2 Si desea depositar "
    )
  );
  let monto;
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
}

loginUsuario();
