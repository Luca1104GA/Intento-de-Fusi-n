
const cloud = document.getElementById("cloud");
const barraLateral = document.querySelector(".barra-lateral");
const spans = document.querySelectorAll("span");
const palanca = document.querySelector(".switch");
const elementosBlancos = document.querySelectorAll(".Estilo_blanco3");
const circulo = document.querySelector(".circulo");
const menuf = document.querySelector(".menuf");
const main = document.querySelector("main");

menuf.addEventListener("click",()=>{
    barraLateral.classList.toggle("max-barra-lateral");
    if(barraLateral.classList.contains("max-barra-lateral")){
        menuf.children[0].style.display = "none";
        menuf.children[1].style.display = "block";
    }
    else{
        menuf.children[0].style.display = "block";
        menuf.children[1].style.display = "none";
    }
    if(window.innerWidth<=320){
        barraLateral.classList.add("mini-barra-lateral");
        main.classList.add("min-main");
        spans.forEach((span)=>{
            span.classList.add("oculto");
        })
    }
});

/* --------------------------------------------------------- Modo Oscuro --------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", function () {
    const palanca = document.querySelector(".switch");
    const elementosBlancos = document.querySelectorAll(".Estilo_blanco3");

    // Obtén el estado actual del modo oscuro desde localStorage
    let modoOscuro = localStorage.getItem("modoOscuro") === "true";

    // Aplica las clases según el estado actual
    if (modoOscuro) {
        document.body.classList.add("dark-mode");
        circulo.classList.add("prendido");
    }

    elementosBlancos.forEach((elemento) => {
        if (modoOscuro) {
            elemento.classList.remove("Estilo_blanco3");
            elemento.classList.add("Estilo_negro3");
        } else {
            elemento.classList.remove("Estilo_negro3");
            elemento.classList.add("Estilo_blanco3");
        }
    });

    palanca.addEventListener("click", () => {
        // Cambia la clase del body para activar o desactivar el modo oscuro
        let body = document.body;
        body.classList.toggle("dark-mode");
        circulo.classList.toggle("prendido");

        // Invierte y guarda el estado actual del modo oscuro en localStorage
        modoOscuro = !modoOscuro;
        localStorage.setItem("modoOscuro", modoOscuro.toString());

        // Itera sobre los elementos con la clase "Estilo_blanco3"
        elementosBlancos.forEach((elemento) => {
            // Restablece las clases según el estado actual
            if (modoOscuro) {
                elemento.classList.remove("Estilo_blanco3");
                elemento.classList.add("Estilo_negro3");
            } else {
                elemento.classList.remove("Estilo_negro3");
                elemento.classList.add("Estilo_blanco3");
            }
        });
    });
});

/* ------------------------------------------------------------------------------------------------------------------------------------ */

cloud.addEventListener("click",()=>{
    barraLateral.classList.toggle("mini-barra-lateral");
    main.classList.toggle("min-main");
    spans.forEach((span)=>{
        span.classList.toggle("oculto");
    });
});



let modoOscuro = false;