document.addEventListener('DOMContentLoaded', function() {
var getRadioValue = function(name) {
  var resultS;
  var elems = document.getElementsByName(name);

  for(var i = 0, len = elems.length; i < len; i++) {
    var elem = elems.item(i);

    if(elem.checked){
      resultS = elem.value;
      break;
    }
  }
  return resultS;
};

  document.getElementById('btn1').addEventListener('click', function(){
    // q1-キャリア満足度
   var q1_1 = Math.floor((getRadioValue('q1_1') - 1) * 25);
   var q1_2 = Math.floor((getRadioValue('q1_2') - 1) * 25);
   var q1_3 = Math.floor((getRadioValue('q1_3') - 1) * 25);
   var q1_4 = Math.floor((getRadioValue('q1_4') - 1) * 25);
   var q1_5 = Math.floor((getRadioValue('q1_5') - 1) * 25);
   // q2-自分の強みの発揮度
   var q2_1 = Math.floor((getRadioValue('q2_1') - 1) * 25);
   var q2_2 = Math.floor((getRadioValue('q2_2') - 1) * 25);
   var q2_3 = Math.floor((getRadioValue('q2_3') - 1) * 25);
   var q2_4 = Math.floor((getRadioValue('q2_4') - 1) * 25);
   var q2_5 = Math.floor((getRadioValue('q2_5') - 1) * 25);
   // q3-キャリア展望度
   var q3_1 = Math.floor((getRadioValue('q3_1') - 1) * 25);
   var q3_2 = Math.floor((getRadioValue('q3_2') - 1) * 25);
   var q3_3 = Math.floor((getRadioValue('q3_3') - 1) * 25);
   var q3_4 = Math.floor((getRadioValue('q3_4') - 1) * 25);
   var q3_5 = Math.floor((getRadioValue('q3_5') - 1) * 25);
   // q4-学びのしなやか度
   var q4_1 = Math.floor((getRadioValue('q4_1') - 1) * 25);
   var q4_2 = Math.floor((getRadioValue('q4_2') - 1) * 25);
   var q4_3 = Math.floor((getRadioValue('q4_3') - 1) * 25);
   var q4_4 = Math.floor((getRadioValue('q4_4') - 1) * 25);
   var q4_5 = Math.floor((getRadioValue('q4_5') - 1) * 25);

   if(!isNaN(q1_1) && !isNaN(q1_2) && !isNaN(q1_3) && !isNaN(q1_4) && !isNaN(q1_5) && !isNaN(q2_1) && !isNaN(q2_2) && !isNaN(q2_3) && !isNaN(q2_4) && !isNaN(q2_5) && !isNaN(q3_1) && !isNaN(q3_2) && !isNaN(q3_3) && !isNaN(q3_4) && !isNaN(q3_5) && !isNaN(q4_1) && !isNaN(q4_2) && !isNaN(q4_3) && !isNaN(q4_4) && !isNaN(q4_5)) {

   storage = localStorage;
   storage.result1 = (q1_1 + q1_2 + q1_3 + q1_4 + q1_5) / 5;
   storage.result2 = (q2_1 + q2_2 + q2_3 + q2_4 + q2_5) / 5;
   storage.result3 = (q3_1 + q3_2 + q3_3 + q3_4 + q3_5) / 5;
   storage.result4 = (q4_1 + q4_2 + q4_3 + q4_4 + q4_5) / 5;
   location.href = "html/result/advice.html";

 } else {

   window.alert('未入力の箇所があります。');

 }


 }, false);

}, false);
