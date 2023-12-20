// Comprobar soporte del navegador
if (typeof(Storage) !== "undefined") {
    // Almacenar
    localStorage.setItem("lastname", "Prodan");
    // Devolver
    document.getElementById("result").innerHTML = localStorage.getItem("lastname");
  } else {
    document.getElementById("result").innerHTML = "Perdón, su navegador no soporta el almacenamiento Web...";
}

/* Contador de cliks */
function clickCounter() {
    if (typeof(Storage) !== "undefined") {
      if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount)+1;
      } else {
        localStorage.clickcount = 1;
      }
      document.getElementById("resultn").innerHTML = "Haz clickeado el bóton " + localStorage.clickcount + " vez(veces).";
    } else {
      document.getElementById("resultn").innerHTML = "Sorry, your browser does not support web storage...";
    }
}

/* Contador de clicks pero solo de la sesión actual */
function clickCountersession() {
    if (typeof(Storage) !== "undefined") {
      if (sessionStorage.clickcount) {
        sessionStorage.clickcount = Number(sessionStorage.clickcount)+1;
      } else {
        sessionStorage.clickcount = 1;
      }
      document.getElementById("resultns").innerHTML = "Haz clickeado el bóton " + sessionStorage.clickcount + " vez(veces) en esta sesión.";
    } else {
      document.getElementById("resultns").innerHTML = "Sorry, your browser does not support web storage...";
    }
}