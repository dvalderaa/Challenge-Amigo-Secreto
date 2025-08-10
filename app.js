// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
  const input = document.getElementById('amigo');
  const nombre = input.value.trim();

  // Se valida la entrada
  if (nombre === '') {
    alert("Por favor, inserte un nombre.");
    return;
  }

  // Se debe actualizar el array "amigos"
  amigos.push(nombre);

  // Debe limpiarse la entrada 
  input.value = '';

  // Para la función de actualizar la lista amiigos
  actualizarLista();
}