function changeHex() {
  // Obtener los valores de los controles deslizantes de color
  var redValue = document.getElementById('slideRedHex').value;
  var greenValue = document.getElementById('slideGreenHex').value;
  var blueValue = document.getElementById('slideBlueHex').value;

  // Convertir los valores de los controles deslizantes a representación hexadecimal
  var redHex = padZero(parseInt(redValue).toString(16));
  var greenHex = padZero(parseInt(greenValue).toString(16));
  var blueHex = padZero(parseInt(blueValue).toString(16));

  var hexColor = redHex + greenHex + blueHex;

  // Actualizar el texto y el color de fondo del cuadro superior con el nuevo color hexadecimal
  var hexResultText = document.getElementById('hexresulttext');
  hexResultText.innerText = '#' + hexColor;

  var hexResult = document.getElementById('hexresult');
  hexResult.style.backgroundColor = '#' + hexColor;

  // Mostrar el valor hexadecimal también en el contenedor de muestra de colores
  hexResult.innerHTML = '<p id="hexresulttext" style="font-size: 120%; font-weight: bold; font-family: Consolas, &quot;Courier New&quot;, Courier, monospace; color: rgb(255, 255, 255);">#' + hexColor + '</p>';

  // Actualizar los valores de texto para los componentes de color individual
  var valRed = document.getElementById('valRed2Hex');
  valRed.innerText = redHex;

  var valGreen = document.getElementById('valGreen2Hex');
  valGreen.innerText = greenHex;

  var valBlue = document.getElementById('valBlue2Hex');
  valBlue.innerText = blueHex;
}