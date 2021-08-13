class Usuario {
  constructor(nombre, dni, clave) {
    this.nombre = nombre;
    this.dni = dni;
    this.clave = clave;
  }
  claveValida(claveIngresada) {
    return this.clave === claveIngresada;
  }
}

let usuarios = [];
usuarios.push(new Usuario("Nahuel Balsamo", "33863147", "nahuel"));
usuarios.push(new Usuario("Julia Puyo", "33625424", "julia"));
usuarios.push(new Usuario("Ruth Puyo", "xx-xxx-xxx", "ruth"));
usuarios.push(new Usuario("Sofia Puyo", "xx-xxx-xxx", "sofia"));

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

function loginUsuario() {
  let dni = prompt("Ingrese su dni");
  let clave = prompt("Ingrese su clave");

  let usuarioEncontrado = buscarUsuario(dni, clave);
  if (usuarioEncontrado) {
    alert(
      `Bienvenida/o ${usuarioEncontrado.nombre} su saldo es $${saldoDisponible}`
    );
    mostrarOperaciones();
  } else {
    alert(`Usuario o Contraseña incorrecta`);
  }
}
