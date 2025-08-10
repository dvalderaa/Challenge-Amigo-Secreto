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

function actualizarLista() {
  // se debe obtener el elemento de la lista ul
  const lista = document.getElementById('listaAmigos');

  // Limpiamos la lista existente
  lista.innerHTML = '';

  // debe iterar sobre "amigos" y crear elementos en <li>
  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement('li');
    li.textContent = amigos[i];
    lista.appendChild(li);
  }
}
