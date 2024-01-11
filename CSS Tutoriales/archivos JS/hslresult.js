// Función para actualizar la representación HSL al iniciar la página
window.onload = function() {
    changeHsl(); // Llamada inicial para actualizar los valores al cargar la página
  };
  
  function changeHsl() {
    // Obtener los valores de los controles deslizantes HSL
    var hueValue = document.getElementById('slideHue').value;
    var satValue = document.getElementById('slideSat').value;
    var lightValue = document.getElementById('slideLight').value;
  
    // Actualizar el texto y el color de fondo del cuadro superior con el nuevo color HSL
    var hslResultText = document.getElementById('hslresulttext');
    hslResultText.innerText = 'hsl(' + hueValue + ', ' + satValue + '%, ' + lightValue + '%)';
  
    var hslResult = document.getElementById('hslresult');
    hslResult.style.backgroundColor = 'hsl(' + hueValue + ', ' + satValue + '%, ' + lightValue + '%)';
  
    // Actualizar los valores de texto para los componentes HSL
    var valHue = document.getElementById('valHue');
    valHue.innerText = hueValue;
  
    var valSat = document.getElementById('valSat');
    valSat.innerText = satValue + '%';
  
    var valLight = document.getElementById('valLight');
    valLight.innerText = lightValue + '%';
}
/* ------------------------------------------------------------------------------------ */

// Función para actualizar la representación HSLA al iniciar la página
window.onload = function() {
  changeHsla(); // Llamada inicial para actualizar los valores al cargar la página
};

function changeHsla() {
  // Obtener los valores de los controles deslizantes de color
  var hueValue = document.getElementById('slideHueA').value;
  var satValue = document.getElementById('slideSatA').value;
  var lightValue = document.getElementById('slideLightA').value;
  var alphaValue = document.getElementById('slideHslAlpha').value / 10;

  // Convertir los valores de los controles deslizantes a representación HSLA
  var hslaColor = 'hsla(' + hueValue + ', ' + satValue + '%, ' + lightValue + '%, ' + alphaValue + ')';

  // Actualizar el texto y el color de fondo del cuadro superior con el nuevo color HSLA
  var hslaResultText = document.getElementById('hslaresulttext');
  hslaResultText.innerText = hslaColor;

  var hslaResult = document.getElementById('hslaresult');
  hslaResult.style.backgroundColor = hslaColor;

  // Actualizar los valores de texto para los componentes de color individual
  var valHue = document.getElementById('valHueA');
  valHue.innerText = hueValue;

  var valSat = document.getElementById('valSatA');
  valSat.innerText = satValue + '%';

  var valLight = document.getElementById('valLightA');
  valLight.innerText = lightValue + '%';

  var valAlpha = document.getElementById('valHslAlpha');
  valAlpha.innerText = alphaValue;
}
