const buttons = document.querySelectorAll('nav.sidebar button');
const sections = document.querySelectorAll('section.content-area');


buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active class from all buttons
    buttons.forEach(b => b.classList.remove('active'));
    // Add active to clicked button
    btn.classList.add('active');

    const id = btn.id.replace('btn-', '');
    sections.forEach(sec => {
      if (sec.id === id) {
        sec.classList.add('active');
        sec.focus();
      } else {
        sec.classList.remove('active');
      }
    });
  });
});

function SubirComentarios(){
    var comentarios = document.getElementById("comentarios").value;
    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("correo").value;
    var fecha = new Date().toLocaleString();
    
    if (comentarios && nombre && correo) {
        var nuevoComentario = document.createElement("div");
        nuevoComentario.className = "comentario";
        nuevoComentario.innerHTML = "<strong>" + nombre + "</strong> (" + fecha + ")<br>" + comentarios;
        document.getElementById("comentarios-lista").appendChild(nuevoComentario);
        
        // Limpiar campos
        document.getElementById("comentarios").value = "";
        document.getElementById("nombre").value = "";
        document.getElementById("correo").value = "";
    } else {
        alert("Por favor, completa todos los campos.");
    }
}
