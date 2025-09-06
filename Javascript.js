// Oculta todas las secciones principales
function ocultarTodo() {
    document.getElementById("seccion-cursos-container").style.display = "none";
    document.getElementById("seccion-contacto").style.display = "none";
    document.getElementById("introduccion").style.display = "none";
    document.getElementById("tsoportevitalbasico").style.display = "none";
    document.getElementById("tsoportevitalavanzado").style.display = "none";
    document.getElementById("tprimerosauxiliobasico").style.display = "none";
    document.getElementById("ttomadelaboratorio").style.display = "none";
    document.getElementById("tadministracionmedicamentos").style.display = "none";
}

// Muestra la sección de cursos y la introducción
function mostrarCursos() {
    ocultarTodo();
    document.getElementById("seccion-cursos-container").style.display = "flex";
    document.getElementById("introduccion").style.display = "block";
}

// Muestra la sección de contacto
function mostrarContacto() {
    ocultarTodo();
    document.getElementById("seccion-contacto").style.display = "block";
}


function soportevitalbasico() {
    ocultarTodo(); 
    document.getElementById("seccion-cursos-container").style.display = "flex"; 
    document.getElementById("tsoportevitalbasico").style.display = "block"; 
}

function soportevitalavanzado() {
    ocultarTodo();
    document.getElementById("seccion-cursos-container").style.display = "flex";
    document.getElementById("tsoportevitalavanzado").style.display = "block";
}

function primerosauxiliobasico() {
    ocultarTodo();
    document.getElementById("seccion-cursos-container").style.display = "flex";
    document.getElementById("tprimerosauxiliobasico").style.display = "block";
}

function tomadelaboratorio() {
    ocultarTodo();
    document.getElementById("seccion-cursos-container").style.display = "flex";
    document.getElementById("ttomadelaboratorio").style.display = "block";
}

function administracionmedicamentos() {
    ocultarTodo();
    document.getElementById("seccion-cursos-container").style.display = "flex";
    document.getElementById("tadministracionmedicamentos").style.display = "block";
}

// Función para guardar los datos del formulario 
function guardarContacto() {
    const nombre = document.getElementById("nombre").value;
    const telefono = document.getElementById("telefono").value;
    const email = document.getElementById("email").value;
    
    console.log("Nombre:", nombre);
    console.log("Teléfono:", telefono);
    console.log("Email:", email);
    
    alert("¡Tus datos han sido guardados! Nos pondremos en contacto contigo pronto.");
}