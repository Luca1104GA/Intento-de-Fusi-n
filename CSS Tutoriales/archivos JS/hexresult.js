  // Función para actualizar la representación hexadecimal al iniciar la página
  window.onload = function() {
    changeHex(); // Llamada inicial para actualizar los valores al cargar la página
  };

  function changeHex() {
    // Obtener los valores de los controles deslizantes de color
    var redValue = document.getElementById('slideRedHex').value;
    var greenValue = document.getElementById('slideGreenHex').value;
    var blueValue = document.getElementById('slideBlueHex').value;

    // Convertir los valores de RGB a representación hexadecimal
    var hexColor = rgbToHex(redValue, greenValue, blueValue);

    // Actualizar el texto y el color de fondo del cuadro superior con el nuevo color hexadecimal
    var hexResultText = document.getElementById('hexresulttext');
    hexResultText.innerText = '#' + hexColor;

    var hexResult = document.getElementById('hexresult');
    hexResult.style.backgroundColor = '#' + hexColor;

    // Mostrar el valor hexadecimal también en el contenedor de muestra de colores
    hexResult.innerHTML = '<p id="hexresulttext" style="font-size: 120%; font-weight: bold; font-family: Consolas, &quot;Courier New&quot;, Courier, monospace; color: rgb(255, 255, 255);">#' + hexColor + '</p>';

    // Actualizar los valores de texto para los componentes de color individual
    var valRed = document.getElementById('valRed2Hex');
    valRed.innerText = padZero(parseInt(redValue).toString(16));

    var valGreen = document.getElementById('valGreen2Hex');
    valGreen.innerText = padZero(parseInt(greenValue).toString(16));

    var valBlue = document.getElementById('valBlue2Hex');
    valBlue.innerText = padZero(parseInt(blueValue).toString(16));

    // Actualizar el valor hexadecimal en el display de resultado
    var resultDisplay = document.getElementById('hexresulttext-display');
    resultDisplay.innerText = '#' + hexColor;
  }

  function rgbToHex(r, g, b) {
    var redHex = componentToHex(r);
    var greenHex = componentToHex(g);
    var blueHex = componentToHex(b);
    return redHex + greenHex + blueHex;
  }

  function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }

  function padZero(str) {
    return str.length < 2 ? "0" + str : str;
  }