document.getElementById('reset').addEventListener('click', function() {
    mostrarMensaje('Vas a resetear el ensayo');
});

document.getElementById('start-test').addEventListener('click', function() {
    mostrarMensaje('Comenzamos el ensayo');
});

document.getElementById('save-data').addEventListener('click', function() {
    mostrarMensaje('Guardamos los datos');
});

document.getElementById('report').addEventListener('click', function() {
    mostrarMensaje('Aqui tienes el reporte');
});

function mostrarMensaje(mensaje) {
    document.getElementById('mensaje').textContent = mensaje;
}
