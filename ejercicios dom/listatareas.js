const formulario = document.getElementById("formulario");
const Input = document.getElementById("Input");
const lista = document.getElementById("lista");

formulario.addEventListener("submit", function(event) {
  event.preventDefault(); 
  const texto = Input.value.trim();

  if (texto) {
    nuevatarea(texto); 
    Input.value = ""; 
  }
});

function nuevatarea(texto) {
  const li = document.createElement("li");
  li.className = "li";

  const Span = document.createElement("span");
  Span.textContent = texto;

  const boton = document.createElement("button");
  boton.textContent = "Completar";
  boton.addEventListener("click", function() {
    Span.classList.toggle("completar");
  });

  const eliminar = document.createElement("button");
  eliminar.textContent = "Eliminar";
  eliminar.addEventListener("click", function() {
    li.remove();
  });

  li.appendChild(Span);
  li.appendChild(boton);
  li.appendChild(eliminar);

  lista.appendChild(li);
}
