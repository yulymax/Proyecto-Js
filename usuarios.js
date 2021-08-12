let nombresDeUsuarios = [`nahuel`, `sofia`, `ruth`, `martin`, `abby`];

function buscarUsuario(nombreUsuario) {
  let usuarioEncontrado;

  for (var i = 0; i < nombresDeUsuarios.length; i++) {
    if (nombresDeUsuarios[i] === nombreUsuario) {
      usuarioEncontrado = i;
    }
  }

  return usuarioEncontrado;
}

function loginUsuarioMejorado() {
  let nombre = prompt("Ingrese su nombre");
  //let password = prompt("Ingrese contraseña"); lo voy a utilizar despues

  let usuarioEncontrado = buscarUsuario(nombre);
  if (usuarioEncontrado >= 0) {
    alert(`Bienvenid/o ${nombre} su saldo es $${saldoDisponible}`);
    mostrarOperaciones();
  } else {
    alert(`Contraseña incorrecta, comuniquese para reestablecer contraseña`);
  }
}
