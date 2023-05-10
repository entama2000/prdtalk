document.addEventListener('DOMContentLoaded', function() {

  var amidaAllResult = localStorage.getItem('amidaResult');

  if(amidaAllResult === null || amidaAllResult === undefined) {
    location.href = "amida.html";
  } else {

  document.getElementById('amidaAction').textContent = amidaAllResult;

  var amidaActionUp = function() {
    var earth = document.getElementById("amidaAction");
    earth.classList.add('effect-scroll');
  }
  setTimeout(amidaActionUp, 300);

}
}, false)
