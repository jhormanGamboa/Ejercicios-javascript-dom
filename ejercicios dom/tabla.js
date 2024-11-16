const formulario = document.getElementById("formularioBusqueda");
const campoBusqueda = document.getElementById("campoBusqueda");
const tablaDiccionario = document.getElementById("tablaDiccionario");
const totalResultados = document.getElementById("totalResultados");

formulario.addEventListener("submit", function(event) {
  event.preventDefault(); 
  const terminoBusqueda = campoBusqueda.value.trim().toLowerCase();
  buscarEnTabla(terminoBusqueda);
});

function buscarEnTabla(termino) {
  const filas = tablaDiccionario.querySelectorAll("tbody tr");
  let coincidencias = 0;

  filas.forEach(fila => {
    fila.classList.remove("atched");
    const celdas = fila.querySelectorAll("td");
    let coincide = false;

    celdas.forEach(celda => {
      if (celda.textContent.toLowerCase().includes(termino)) {
        coincide = true;
      }
    });

    if (coincide) {
      fila.classList.add("matched"); 
      coincidencias++;
    }
  });

  totalResultados.textContent = coincidencias;
}
