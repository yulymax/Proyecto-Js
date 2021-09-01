let saldoDisponible = 2500;
//Aplique Dom aca
function mostrarSaldo(saldo) {
  Swal.fire(`Su saldo es $${saldo}`);

  let saldoCuentaDom = $("#saldo-cuenta");
  saldoCuentaDom.text(saldo);
}
//Funcion Transferir:
function transferir(montoAtransferir) {
  saldoDisponible = saldoDisponible - montoAtransferir;
}

function transferirDinero() {
  Swal.fire({
    text: "Cuanto desea transferir?",
    input: "number",
  }).then(function (result) {
    if (result.value) {
      let monto = Number(result.value);
      transferir(monto);
      mostrarSaldo(saldoDisponible);
      Swal.fire("Has transferido $" + monto);
    }
  });
}

//Funcion Deposito:
function deposito(montoAdepositar) {
  saldoDisponible = saldoDisponible + montoAdepositar;
}

function depositarDinero() {
  Swal.fire({
    text: "Cuanto desea depositar?",
    input: "number",
  }).then(function (result) {
    if (result.value) {
      let monto = Number(result.value);
      deposito(monto);
      mostrarSaldo(saldoDisponible);
      Swal.fire("Has depositado $" + monto);
    }
  });
}

//Definicion de mis usuarios
class Usuario {
  constructor(dni, clave) {
    this.dni = dni;
    this.clave = clave;
  }
  claveValida(claveIngresada) {
    return this.clave === claveIngresada;
  }
}

let usuarios = [];
//Funcion Buscar usuario
function buscarUsuario(dniIngresado, claveIngresada) {
  let usuarioEncontrado;

  for (var i = 0; i < usuarios.length; i++) {
    if (usuarios[i].dni === dniIngresado) {
      if (usuarios[i].claveValida(claveIngresada)) {
        usuarioEncontrado = usuarios[i];
      }
    }
  }

  return usuarioEncontrado;
}

//Funcion Login del usuario
function loginUsuario(dni, clave) {
  let usuarioEncontrado = buscarUsuario(dni, clave);
  if (usuarioEncontrado) {
    mostrarSaldo(saldoDisponible);
  } else {
    Swal.fire("Usuario o contrseña incorrecta");
  }
}
//Funcion carga de usuario
function cargaUsuario() {
  let datoDeStorage = localStorage.getItem("usuarios");
  if (datoDeStorage) {
    let usuariosParseados = JSON.parse(datoDeStorage);
    for (var i = 0; i < usuariosParseados.length; i++) {
      usuarios.push(
        new Usuario(usuariosParseados[i].dni, usuariosParseados[i].clave)
      );
    }
  }
}
cargaUsuario();

/*******************************************************************/

let form1 = $("#form1");
const ingresar = (e) => {
  e.preventDefault();
  let dni = $("#usuarioDni").val();
  let clave = $("#password").val();
  loginUsuario(dni, clave);
};
form1.on("submit", ingresar);

let botonR = $("#btnReg");

const registrar = (e) => {
  e.preventDefault();
  let dni = $("#usuarioDni").val();
  let clave = $("#password").val();
  if (dni && clave) {
    usuarios.push(new Usuario(dni, clave));
    let datoParseado = JSON.stringify(usuarios);
    localStorage.setItem("usuarios", datoParseado);

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Usuario registrado con exito",
      showConfirmButton: false,
      timer: 1500,
    });
  } else {
    Swal.fire("Ingrese un DNI y clave para registrarse");
  }
};

botonR.on("click", registrar);

let btndeposito = $("#depositarDinero");
btndeposito.on("click", () => {
  depositarDinero();
});
let btntransferir = $("#transferirDinero");
btntransferir.on("click", () => {
  transferirDinero();
});
