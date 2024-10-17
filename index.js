/* const nombre = 'Roberto';
const apellido = 'Garcia';
const edad = 30; */

function mostrarMensaje() {
    // Obtener los valores ingresados por el usuario
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const fechaNacimiento = new Date(document.getElementById("fechaNacimiento").value);

    // Calcular la edad en días
    const hoy = new Date();
    const diferenciaTiempo = hoy - fechaNacimiento;
    const diasVividos = Math.floor(diferenciaTiempo / (1000 * 60 * 60 * 24));

    // Mostrar mensajes
    const mensajeBienvenida = `¡Bienvenido ${nombre} ${apellido}!`;
    const mensajeDias = `Has vivido aproximadamente ${diasVividos} días.`;
    const mensajeElemento = document.getElementById("mensaje-bienvenida");
    const diasElemento = document.getElementById("mensaje-dias");

    mensajeElemento.textContent = mensajeBienvenida;
    mensajeElemento.classList.remove("oculto");

    diasElemento.textContent = mensajeDias;
    diasElemento.classList.remove("oculto");
}
