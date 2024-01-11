function changeRGB() {
    // Obtener los valores de los controles deslizantes de color
    var redValue = document.getElementById('slideRed').value;
    var greenValue = document.getElementById('slideGreen').value;
    var blueValue = document.getElementById('slideBlue').value;

    // Actualizar el texto y el color de fondo del cuadro superior con el nuevo color RGB
    var rgbResultText = document.getElementById('rgbresulttext');
    rgbResultText.innerText = 'RGB(' + redValue + ', ' + greenValue + ', ' + blueValue + ')';
    
    var rgbResult = document.getElementById('rgbresult');
    rgbResult.style.backgroundColor = 'rgb(' + redValue + ', ' + greenValue + ', ' + blueValue + ')';

    // Actualizar los valores de texto para los componentes de color individual
    var valRed = document.getElementById('valRed2');
    valRed.innerText = redValue;

    var valGreen = document.getElementById('valGreen2');
    valGreen.innerText = greenValue;

    var valBlue = document.getElementById('valBlue2');
    valBlue.innerText = blueValue;
}

// Aca el del RGBA------------------------------------------------------------------->
function changeRGBA() {
    // Obtener los valores de los controles deslizantes de color y alfa
    var redValue = document.getElementById('slideRedA').value;
    var greenValue = document.getElementById('slideGreenA').value;
    var blueValue = document.getElementById('slideBlueA').value;
    var alphaValue = document.getElementById('slideAlphaA').value / 10; // Normalizar alfa a un rango de 0 a 1

    // Actualizar el texto y el color de fondo del cuadro superior con el nuevo color RGBA
    var rgbaResultText = document.getElementById('rgbaresulttext');
    rgbaResultText.innerText = 'rgba(' + redValue + ', ' + greenValue + ', ' + blueValue + ', ' + alphaValue + ')';

    var rgbaResult = document.getElementById('rgbaresult');
    rgbaResult.style.backgroundColor = 'rgba(' + redValue + ', ' + greenValue + ', ' + blueValue + ', ' + alphaValue + ')';

    // Actualizar los valores de texto para los componentes de color individual y alfa
    var valRed = document.getElementById('valRed2A');
    valRed.innerText = redValue;

    var valGreen = document.getElementById('valGreen2A');
    valGreen.innerText = greenValue;

    var valBlue = document.getElementById('valBlue2A');
    valBlue.innerText = blueValue;

    var valAlpha = document.getElementById('valAlpha2A');
    valAlpha.innerText = alphaValue.toFixed(1); // Mostrar el alfa con un solo decimal
}

