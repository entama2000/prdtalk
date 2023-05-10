document.addEventListener('DOMContentLoaded', function() {

  var result1 = localStorage.result1;
  var result2 = localStorage.result2;
  var result3 = localStorage.result3;
  var result4 = localStorage.result4;

  if(result1 === void 0 && result2 === void 0 && result3 === void 0 && result4 === void 0) {
    location.href = "../../index.html";
  }else{
     if(result1 < 60) {
      document.getElementById('result1').classList.add('red');
      document.getElementById('advice1L').classList.add('adviceBlock');
      document.getElementById('advice1L').classList.remove('adviceNone');
      document.getElementById('advice1H').classList.remove('adviceBlock');
      document.getElementById('advice1H').classList.add('adviceNone');
     }else{
      document.getElementById('result1').classList.add('blue');
      document.getElementById('advice1H').classList.add('adviceBlock');
      document.getElementById('advice1H').classList.remove('adviceNone');
      document.getElementById('advice1L').classList.remove('adviceBlock');
      document.getElementById('advice1L').classList.add('adviceNone');
     }

     if(result2 < 60) {
      document.getElementById('result2').classList.add('red');
      document.getElementById('advice2L').classList.add('adviceBlock');
      document.getElementById('advice2L').classList.remove('adviceBlock');
      document.getElementById('advice2H').classList.remove('adviceBlock');
      document.getElementById('advice2H').classList.add('adviceNone');
     }else{
      document.getElementById('result2').classList.add('blue');
      document.getElementById('advice2H').classList.add('adviceBlock');
      document.getElementById('advice2H').classList.remove('adviceNone');
      document.getElementById('advice2L').classList.remove('adviceBlock');
      document.getElementById('advice2L').classList.add('adviceNone');
     }

     if(result3 < 60) {
      document.getElementById('result3').classList.add('red');
      document.getElementById('advice3L').classList.add('adviceBlock');
      document.getElementById('advice3L').classList.remove('adviceBlock');
      document.getElementById('advice3H').classList.remove('adviceBlock');
      document.getElementById('advice3H').classList.add('adviceNone');
     }else{
      document.getElementById('result3').classList.add('blue');
      document.getElementById('advice3H').classList.add('adviceBlock');
      document.getElementById('advice3H').classList.remove('adviceNone');
      document.getElementById('advice3L').classList.remove('adviceBlock');
      document.getElementById('advice3L').classList.add('adviceNone');
     }

     if(result4 < 60) {
      document.getElementById('result4').classList.add('red');
      document.getElementById('advice4L').classList.add('adviceBlock');
      document.getElementById('advice4L').classList.remove('adviceBlock');
      document.getElementById('advice4H').classList.remove('adviceBlock');
      document.getElementById('advice4H').classList.add('adviceNone');
     }else{
      document.getElementById('result4').classList.add('blue');
      document.getElementById('advice4H').classList.add('adviceBlock');
      document.getElementById('advice4H').classList.remove('adviceNone');
      document.getElementById('advice4L').classList.remove('adviceBlock');
      document.getElementById('advice4L').classList.add('adviceNone');
     }

  document.getElementById('result1').textContent = result1 + '点';
  document.getElementById('result2').textContent = result2 + '点';
  document.getElementById('result3').textContent = result3 + '点';
  document.getElementById('result4').textContent = result4 + '点';

}

document.getElementById('adviceEntryBtn').addEventListener('click', function(){
  location.href = "../applicationForm/info.html"
 }, false);
}, false);
