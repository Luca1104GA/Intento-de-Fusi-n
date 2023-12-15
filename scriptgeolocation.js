function getLocation(elementId) {
  const x = document.getElementById(elementId);

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      showPosition(position, x);
    }, function(error) {
      showError(error, x);
    });
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position, element) {
  element.innerHTML = "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;
}

function showError(error, element) {
  switch(error.code) {
    case error.PERMISSION_DENIED:
      element.innerHTML = "El usuario ha denegado el permiso de Geolocalización.";
      break;
    case error.POSITION_UNAVAILABLE:
      element.innerHTML = "La información de ubicación no está disponible.";
      break;
    case error.TIMEOUT:
      element.innerHTML = "Se agotó el tiempo de espera.";
      break;
    case error.UNKNOWN_ERROR:
      element.innerHTML = "Un error desconocido ha ocurrido.";
      break;
  }
}