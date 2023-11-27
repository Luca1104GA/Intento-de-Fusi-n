/* ---------------------------Despliega una lista en la seccion charset */

document.addEventListener('DOMContentLoaded', function() {
    const lista = document.querySelector('.desplegable');
    const boton = document.querySelector('.button');

    boton.addEventListener('click', function() {
        if (lista.classList.contains('desplegado')) {
            lista.classList.remove('desplegado');
        } else {
            lista.classList.add('desplegado');
        }
    });
});