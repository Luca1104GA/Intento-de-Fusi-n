/* const btnMenu = document.querySelector("#btnMenu");
const menu = document.querySelector("#menu");
if(btnMenu !== null && menu !== null){
    btnMenu.addEventListener("click", function(){
        menu.classList.toggle("mostrar");
    });
} */

const subMenuBtn = document.querySelectorAll(".submenu-btn");
for(let i=0; i<subMenuBtn.length; i++) {
    subMenuBtn[i].addEventListener("click", function(){
        if(window.innerWidth < 1024){
            const subMenu = this.nextElementSibling;
            const height = subMenu.scrollHeight;

            if(subMenu.classList.contains("desplegar")){
                subMenu.classList.remove("desplegar");
                subMenu.removeAttribute("style")
            } else {
                subMenu.classList.add("desplegar");
                subMenu.style.height = height + "px"
            }

            
        }
    });
}


document.addEventListener("DOMContentLoaded", function() {
    const botonVolverArriba = document.getElementById("botonVolverArriba");
    const botonIrAbajo = document.getElementById("botonIrAbajo");

    botonVolverArriba.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    botonIrAbajo.addEventListener("click", () => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    });

    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
            botonVolverArriba.style.display = "block";
        } else {
            botonVolverArriba.style.display = "none";
        }

        if (window.scrollY < document.body.scrollHeight - window.innerHeight) {
            botonIrAbajo.style.display = "block";
        } else {
            botonIrAbajo.style.display = "none";
        }
    });
});



document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

const botonesChatGpt = document.getElementsByClassName("botonChatGpt");
const contenidosChatGpt = document.getElementsByClassName("contenidoChatGpt");

for (let i = 0; i < botonesChatGpt.length; i++) {
    botonesChatGpt[i].addEventListener("click", function() {
        const contenido = contenidosChatGpt[i];
        if (contenido.style.display === "none" || contenido.style.display === "") {
            contenido.style.display = "block";
        } else {
            contenido.style.display = "none";
        }
    });
}

const botonTop = document.getElementById("botonTop");
botonTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

function light(sw) {
    var pic;
    if (sw == 0) {
      pic = "imagenes/pic_bulboff.gif"
    } else {
      pic = "imagenes/pic_bulbon.gif"
    }
    document.getElementById('myImage').src = pic;
}






function myFunction4() {
    document.getElementById("demo4").style.fontSize = "25px"; 
    document.getElementById("demo4").style.color = "red";
    document.getElementById("demo4").style.backgroundColor = "yellow";        
}

function myFunction3() { 
    document.getElementById("demo").innerHTML = "<strong>¡Hola javaScript!</strong>";
}

function myFunction2() {
    alert("Redireccionando a Wikipedia!");
}

function myFunction() {
    var x = document.getElementsByClassName("city2");
    for (var i = 0; i < x.length; i++) {
        if (x[i].style.display === "none" || x[i].style.display === "") {
            x[i].style.display = "block"; // Mostrar el elemento
        } else {
            x[i].style.display = "none"; // Ocultar el elemento
        }
    }
}

function displayResult() {
    var headerElement = document.getElementById("myHeader2");
  
    if (headerElement.innerHTML === "Hello World!") {
      headerElement.innerHTML = "Have a nice day!";
    } else {
      headerElement.innerHTML = "Hello World!";
    }
}
  





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
