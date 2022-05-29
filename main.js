var a = new Date();
var b = a.getFullYear();
document.getElementById('getYear').innerHTML = b;

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js');
  });
}
