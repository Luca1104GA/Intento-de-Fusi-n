var i = 0;

function countNumbers() {
  i++;
  postMessage(i);
  setTimeout(countNumbers, 1000);
}

countNumbers();